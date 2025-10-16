variable "region" {
  type    = string
  default = "us-east-2"
}

variable "project" {
  type    = string
  default = "sean-portfolio"
}

variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}

variable "public_subnets" {
  type    = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnets" {
  type    = list(string)
  default = ["10.0.101.0/24", "10.0.102.0/24"]
}

variable "db_username" {
  type    = string
  default = "sean"
}

variable "db_password" {
  type = string
}

variable "db_name" {
  type    = string
  default = "sean_db"
}

variable "app_runner_instance_cpu" {
  type    = number
  default = 1024
}

variable "app_runner_instance_memory" {
  type    = number
  default = 2048
}

variable "ecr_repository_name" {
  type    = string
  default = "sean-portfolio"
}

variable "domain_name" {
  type    = string
  default = ""
}

variable "image_tag" {
  type    = string
  default = "latest"
}