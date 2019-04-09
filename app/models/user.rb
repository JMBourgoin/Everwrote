class User < ApplicationRecord
    validates :session_token, :password_digest, presence: true
    validates :email, presence: true, uniqueness: true
    # format: {:with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i} 
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :notebooks, dependent: :destroy
    has_many :notes, dependent: :destroy
    has_many :tags, dependent: :destroy

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end
    
    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end
end