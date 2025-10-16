output "ecr_repository_url" {
  value = aws_ecr_repository.app_repo.repository_url
}

output "app_runner_service_arn" {
  value = aws_apprunner_service.app.arn
}

output "rds_endpoint" {
  value = aws_db_instance.primary.address
}

output "cognito_user_pool_id" {
  value = aws_cognito_user_pool.main.id
}

output "s3_bucket" {
  value = aws_s3_bucket.assets.bucket
}