# AWS Static Website Deployment with Terraform

This is a static website deployment project built for AWS infrastructure. The website is a simple interactive tear-off flyer that runs in the browser and is hosted on Amazon S3 with global content delivery through CloudFront. All infrastructure is defined and deployed using Terraform so the entire setup can be recreated automatically.

The project was created for a university cloud computing course focusing on cloud architecture design, infrastructure as code, and global content delivery optimization.

## Live Website

**URL:** https://d2vquu6dppfcan.cloudfront.net

The website features an interactive tear-off flyer where users can hover over strips to see them lift slightly, then click to tear them off. Each torn strip leaves behind a unique jagged edge residue, similar to real paper.

## Main Features

- Hosting static website files on Amazon S3
- Global content delivery through CloudFront CDN for low latency worldwide
- Automated infrastructure deployment using Terraform
- HTTPS enabled for secure access
- Interactive website with tear-off strip functionality

## Architecture

The architecture consists of three main AWS services:

**Amazon S3** stores the static website files (HTML, CSS, JavaScript). The bucket is configured for static website hosting but is not publicly accessible - only CloudFront can access it.

**Amazon CloudFront** is a Content Delivery Network that caches the website at edge locations around the world. When a user visits the site, CloudFront serves the content from the nearest edge location for fast loading times.

**Terraform** manages all the infrastructure. Instead of manually creating resources in the AWS console, Terraform code defines everything and deploys it automatically.

The data flow works like this: A user requests the website, the request goes to the nearest CloudFront edge location, CloudFront either serves cached content immediately or fetches it from S3 if not cached, and the content is delivered to the user.

## Why This Architecture

The requirements for this project were:
- The website must be highly available
- Visitors from around the globe should not experience latency
- The backend should autoscale if more visitors come to the webpage

**High Availability**: Amazon S3 provides 99.99% availability and automatically stores data across multiple facilities.

**Low Latency**: CloudFront has edge locations in over 400 cities worldwide, so users access cached content from nearby servers instead of connecting all the way to Canada.

**Auto-Scaling**: Both S3 and CloudFront scale automatically. There are no servers to manage or capacity limits to configure.

## Project Structure

The project consists of the following files:

**main.tf** – defines all AWS resources (S3 bucket, CloudFront distribution, access policies).  
**variables.tf** – contains input variables like the AWS region.  
**outputs.tf** – displays important information after deployment (CloudFront URL, bucket name).  
**website/** – folder containing the static website files (index.html, style.css, script.js).

## Technologies Used

- Amazon Web Services (S3, CloudFront)
- Terraform (Infrastructure as Code)
- HTML, CSS, JavaScript (Frontend)

## Purpose

The purpose of this project was to learn practical cloud architecture skills, understand content delivery networks, and work with infrastructure as code. The architecture is production-ready and demonstrates industry best practices for hosting static websites at scale.

This project is free to use, extend, or modify.
