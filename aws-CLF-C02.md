# AWS Certified Cloud Practitioner Certification Course 2026 (CLF-C02)

## Getting Started

### 1. AWS Root User

When creating an AWS account, you initially use the **AWS root user**.

The root user has full access to the AWS account and should **not** be used for normal day-to-day AWS operations.

> **Important:** Use the root user only for tasks that specifically require root-user credentials.

Some root-user-only tasks will be covered later in the course.

---

### 2. Create an IAM User

For regular access to the AWS Management Console, create a separate user using **IAM (Identity and Access Management)**.

#### Steps

Navigate to:

    AWS Management Console
        ↓
    Search for IAM
        ↓
    IAM → Users
        ↓
    Create user

During the user creation process:

1. Enter the user name.
2. Select **Provide user access to the AWS Management Console — optional**.
3. Add the user to a group.
4. If a suitable group does not exist, create one.
5. Assign the appropriate permissions to the group.

---

### 3. IAM Groups and Permissions

IAM groups allow you to manage permissions for multiple users.

When creating a group, choose the appropriate AWS managed policy based on the user's responsibilities.

| User Type | Permission |
|---|---|
| Administrator | `AdministratorAccess` |
| Power User | `PowerUserAccess` |

#### Administrator

An administrator generally requires broad access to AWS services and account resources.

Policy: `AdministratorAccess`

#### Power User

A power user has broad access to AWS services but does not have full permissions to manage IAM resources.

Policy: `PowerUserAccess`

> **Security Best Practice:** Follow the **principle of least privilege**. Give users only the permissions they actually need.

---

## IAM Console Sign-In URL

An IAM user can sign in to the AWS Management Console using an account-specific URL.

Example:

    https://130299713439.signin.aws.amazon.com/console

The number in the URL represents the **AWS Account ID**.

---

### AWS Account Alias

Instead of using the numeric AWS Account ID in the sign-in URL, you can create an **AWS account alias**.

Navigate to:

    IAM
        ↓
    IAM Dashboard
        ↓
    AWS Account
        ↓
    Account Alias
        ↓
    Create

An account alias makes the sign-in URL easier to remember.

> **Exam Note:** An AWS account alias provides an alternative, human-readable name for the AWS account's sign-in URL.

---

## Root User Security

The root user should not be used for everyday AWS operations.

### Remember

- Use the **root user** only when required.
- Use **IAM users** for normal access.
- Use **IAM groups** to manage permissions.
- Follow the **principle of least privilege**.
- Protect both root and IAM accounts with MFA.

---

## Multi-Factor Authentication (MFA)

After signing in, enable **MFA (Multi-Factor Authentication)** to improve account security.

From the IAM dashboard, you may see:

> **Add multi-factor authentication (MFA) for yourself to improve security for this account.**

MFA is also included in the AWS account's **security recommendations**.

### Why MFA?

MFA adds an additional authentication factor beyond a username and password.

Instead of relying only on:

    Username + Password

you also use an additional authentication factor, such as an authenticator-generated code.

> **Best Practice:** Enable MFA, especially for the AWS root user and users with elevated permissions.

---

# AWS Region Selector

AWS operates through multiple **Regions** around the world.

A Region is a separate geographic area containing AWS infrastructure.

Examples:

    us-east-1
    us-west-2
    eu-west-1

---

## Region-Specific Services

Not every AWS service behaves the same way with Regions.

Some services are **global**, while others are **Regional**.

### Examples

| AWS Service | Scope |
|---|---|
| IAM | Global |
| CloudFront | Global |
| EC2 | Regional |

For example, when working with **EC2**, resources are associated with the currently selected AWS Region.

Some services, such as IAM, are global and are not tied to a specific Region.

> **Important:** Always check which Region is selected before creating AWS resources.

---

## Current AWS Region

The currently selected Region is displayed in the **top-right corner** of the AWS Management Console, near the account/user menu.

For example:

    Region: US East (N. Virginia)

When you change the Region, the AWS Management Console displays the resources available in that Region.

### Example

If you create an EC2 instance in:

    us-east-1

and then switch to:

    eu-west-1

you will not see that EC2 instance in the new Region.

> **Exam Note:** Always remember the difference between **Global** and **Regional** AWS services.

---

# AWS Budgets

AWS Budgets can be used to monitor AWS spending and create alerts when costs reach specified thresholds.

This is especially useful when experimenting with AWS services because some resources can generate charges.

---

## Check Pricing Before Creating Resources

When configuring an AWS service, pay attention to the resource type or configuration because different configurations can have different prices.

For example, an ElastiCache node type might look like:

    cache.r7g.xlarge

A smaller node type may cost less than a larger node type.

> **Important:** Always check the pricing of the resources you are creating before launching them.

---

# Create an AWS Budget

To create a budget, navigate to:

    AWS Management Console
        ↓
    User/Account Menu
        ↓
    Billing and Cost Management
        ↓
    Budgets
        ↓
    Create budget

---

## Budget Configuration

Example configuration:

| Setting | Value |
|---|---|
| Budget setup | Customize / Advanced |
| Budget type | Cost budget |
| Period | Monthly |
| Budget renewal type | Recurring |
| Budgeting method | Fixed |
| Scope | All AWS services |

### Configuration Flow

    Create budget
        ↓
    Customize / Advanced
        ↓
    Cost budget
        ↓
    Monthly
        ↓
    Recurring
        ↓
    Fixed
        ↓
    All AWS services
        ↓
    Next

---

## Budget Alerts

AWS Budgets allows you to configure alerts so that you can be notified when your AWS spending reaches a specified threshold.

The general flow is:

    Create budget
        ↓
    Configure budget
        ↓
    Configure budget alert
        ↓
    Next
        ↓
    Set up budget action
        ↓
    Create budget

> **Course Note:** Keep **Budget Actions** in mind. Review this feature later in the course if needed.

---

# Amazon SNS Alerts

When configuring budget alerts, you may encounter:

> **Amazon SNS Alerts — Optional**

**Amazon SNS (Simple Notification Service)** can integrate with AWS services and deliver notifications.

For example, SNS can be used to send notifications when an AWS Budget alert is triggered.

> **Course Note:** Keep Amazon SNS in mind and review its integration with AWS Budgets later.

---

# CLF-C02 Exam Notes

## AWS Account & IAM

- **AWS root user** = The original AWS account identity with full access.
- Avoid using the root user for everyday AWS operations.
- **IAM** = Identity and Access Management.
- Create IAM users for regular AWS access.
- **IAM groups** allow permissions to be managed for multiple users.
- `AdministratorAccess` provides broad administrative permissions.
- `PowerUserAccess` provides broad AWS service access without full IAM administration.
- Use the **principle of least privilege**.
- Enable **MFA** to improve account security.
- An **AWS account alias** can make the IAM sign-in URL easier to remember.

## AWS Regions

- AWS has multiple geographic **Regions**.
- Some AWS services are **Global**.
- Other AWS services are **Regional**.
- **IAM** is a global service.
- **CloudFront** is a global service.
- **EC2** resources are regional.
- Always check the selected Region before creating or looking for resources.

## AWS Budgets

- **AWS Budgets** helps monitor AWS spending.
- Budgets can be configured to track costs.
- Budget alerts can notify you when spending reaches a configured threshold.
- Different AWS resource configurations can have different prices.
- Check resource pricing before creating resources.
- **Amazon SNS** can be used with AWS services for notifications.
- Budget Actions can be configured to take actions when specified conditions are met.

---

# Quick Revision

    ROOT USER
        ↓
    Use only when specifically required
        ↓
    Enable MFA

    IAM
        ↓
    Create IAM Users
        ↓
    Organize Users into Groups
        ↓
    Assign Permissions

    REGIONS
        ↓
    Global Services ≠ Regional Services
        ↓
    Always check the selected Region

    BUDGETS
        ↓
    Monitor AWS Costs
        ↓
    Create Alerts
        ↓
    SNS can be used for notifications

---

# Key Terms

| Term | Meaning |
|---|---|
| AWS Root User | Original AWS account identity with full account access |
| IAM | Identity and Access Management |
| IAM User | Identity used for AWS access |
| IAM Group | Collection of IAM users that can share permissions |
| IAM Policy | Defines permissions for AWS resources |
| MFA | Multi-Factor Authentication |
| AWS Region | Geographic area containing AWS infrastructure |
| Global Service | AWS service that is not tied to a specific Region |
| Regional Service | AWS service whose resources are associated with a Region |
| AWS Budgets | Tool for monitoring and managing AWS spending |
| Amazon SNS | Simple Notification Service used for notifications and integrations |
| Account Alias | Human-readable alias for an AWS account sign-in URL |
| Least Privilege | Giving users only the permissions they need |
