resource "random_id" "bucket_suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "assets" {
  bucket        = "${var.project}-assets-${random_id.bucket_suffix.hex}"
  force_destroy = true

  tags = {
    Name = "${var.project}-assets"
  }
}

resource "aws_s3_bucket_acl" "assets_acl" {
  bucket = aws_s3_bucket.assets.id
  acl    = "private"
}

