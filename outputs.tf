output "bucket_name" {
  description = "Name of the S3 bucket hosting the website"
  value       = aws_s3_bucket.website_bucket.bucket
}

output "bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.website_bucket.arn
}

output "website_endpoint" {
  description = "Public website URL"
  value       = aws_s3_bucket_website_configuration.website_config.website_endpoint
}
output "cloudfront_domain" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.website_distribution.domain_name
}

output "cloudfront_url" {
  description = "Full CloudFront URL"
  value       = "https://${aws_cloudfront_distribution.website_distribution.domain_name}"
}