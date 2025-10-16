resource "aws_iam_role" "rds_proxy_role" {
  name = "${var.project}-rds-proxy-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "rds.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_db_proxy" "rds_proxy" {
  name                   = "${var.project}-proxy"
  engine_family          = "POSTGRESQL"
  role_arn               = aws_iam_role.rds_proxy_role.arn
  vpc_subnet_ids         = [for subnet in aws_subnet.private : subnet.id]
  vpc_security_group_ids = [aws_security_group.rds.id]
  debug_logging          = false

  auth {
    auth_scheme = "SECRETS"
    iam_auth    = "DISABLED"
    secret_arn  = aws_secretsmanager_secret_version.db_credentials.arn
  }

  tags = {
    Name = "${var.project}-db-proxy"
  }
}