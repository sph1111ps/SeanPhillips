resource "aws_cognito_user_pool" "main" {
  name                     = "${var.project}-users"
  auto_verified_attributes = ["email"]
}

resource "aws_cognito_user_pool_client" "client" {
  name                        = "${var.project}-app-client"
  user_pool_id                = aws_cognito_user_pool.main.id
  explicit_auth_flows         = [
    "ALLOW_USER_PASSWORD_AUTH",
    "ALLOW_REFRESH_TOKEN_AUTH"
  ]
  prevent_user_existence_errors = "ENABLED"
}