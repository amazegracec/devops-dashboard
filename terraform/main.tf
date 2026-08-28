provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "website" {
  bucket = "amazegrace-devops-dashboard"
}