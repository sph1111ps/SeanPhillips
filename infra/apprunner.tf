resource "aws_iam_role" "apprunner_access" {
  name = "${var.project}-apprunner-access"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "build.apprunner.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "apprunner_access" {
  role       = aws_iam_role.apprunner_access.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess"
}

resource "aws_apprunner_service" "app" {
  service_name = "${var.project}-app"

  source_configuration {
    authentication_configuration {
      access_role_arn = aws_iam_role.apprunner_access.arn
    }

    auto_deployments_enabled = true

    image_repository {
      image_identifier      = "${aws_ecr_repository.app_repo.repository_url}:${var.image_tag}"
      image_repository_type = "ECR"

      image_configuration {
        port = "3000"
      }
    }
  }

  instance_configuration {
    cpu    = tostring(var.app_runner_instance_cpu)
    memory = tostring(var.app_runner_instance_memory)
  }

  tags = {
    Name = "${var.project}-apprunner"
  }
}