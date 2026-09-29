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


# AWS Free Tier

The **AWS Free Tier** allows eligible customers to use certain AWS services and resources without paying, subject to the applicable Free Tier limits and conditions.

> **Important:** Free Tier does not mean that every AWS service or every amount of usage is free. Always check the current Free Tier limits and monitor your usage.

---

## AWS Free Tier Alerts

You can enable notifications to receive alerts about your AWS Free Tier usage.

Navigate to:

    AWS Management Console
        ↓
    User/Account Menu
        ↓
    Billing and Cost Management
        ↓
    Billing Preferences

Enable:

    Receive AWS Free Tier alerts

This helps you monitor your Free Tier usage and avoid unexpected charges when usage exceeds the applicable Free Tier limits.

---

# Billing Alerts

AWS also provides billing alerts through **Amazon CloudWatch**.

Navigate to:

    AWS Management Console
        ↓
    User/Account Menu
        ↓
    Billing and Cost Management
        ↓
    Billing Preferences

Enable:

    Receive CloudWatch billing alerts

> **Course Note:** CloudWatch billing alarms are an older approach to billing monitoring. AWS Budgets is the newer recommended approach for many cost-management use cases, but CloudWatch billing alarms can still provide useful flexibility.

---

# CloudWatch Billing Alarm

**Amazon CloudWatch** is a monitoring and observability service that provides capabilities such as:

- Metrics
- Alarms
- Logs
- Monitoring

A CloudWatch alarm can monitor a metric and trigger an action when a specified condition is met.

---

## Create a Billing Alarm

### Step 1 — Open CloudWatch

Search for:

    CloudWatch

Then navigate to:

    CloudWatch
        ↓
    Alarms
        ↓
    Create alarm

---

### Step 2 — Select the Metric

For the data source, select:

    Data source: Metrics
    Type: Classic

Then:

    Select metric
        ↓
    Search for: billing
        ↓
    Total Estimated Charge

---

### Step 3 — Configure the Threshold

Configure the alarm threshold.

Example:

    Threshold type: Static

Then configure the required threshold values.

The alarm will monitor the selected billing metric and compare it against the configured threshold.

---

### Step 4 — Configure the Alarm State Trigger

Configure the alarm state that should trigger the notification.

Select:

    In alarm

This means:

> The metric or expression is outside of the defined threshold.

---

## Step 5 — Configure an SNS Notification

For the notification action, select:

    Send a notification to the following SNS topic

You can create a new SNS topic.

Enter the email address that should receive the notification and create the topic.

Example:

    Create new topic
        ↓
    Enter email address
        ↓
    Create topic

---

## Amazon SNS

**Amazon SNS (Simple Notification Service)** can send notifications when an event occurs.

In this case:

    CloudWatch Alarm
        ↓
    SNS Topic
        ↓
    Email Notification

The SNS topic can be viewed through the Amazon SNS service.

Navigate to:

    Amazon SNS
        ↓
    Topics

The topic will show its associated subscriptions.

> **Important:** The email recipient may need to confirm the SNS subscription before receiving notifications.

---

## Step 6 — Add Alarm Details

Add the required alarm details.

Then:

    Preview and create

The CloudWatch billing alarm is now configured.

---

# Check SNS Topics and Subscriptions

To review the SNS topics and subscriptions:

    AWS Management Console
        ↓
    Search for SNS
        ↓
    Amazon SNS
        ↓
    Topics

From the Topics section, you can view:

- SNS topics
- Subscriptions
- Subscription status
- Subscribers associated with the topic

---

# AWS Budgets vs CloudWatch Billing Alarms

Both AWS Budgets and CloudWatch billing alarms can be used to monitor AWS costs, but they serve different purposes.

| Feature | AWS Budgets | CloudWatch Billing Alarm |
|---|---|---|
| Cost monitoring | Yes | Yes |
| Budget configuration | Yes | No |
| Cost threshold alerts | Yes | Yes |
| Uses CloudWatch | Not necessarily | Yes |
| Uses SNS | Can integrate with notifications | Yes |
| Flexible monitoring | Yes | Yes |
| Recommended for modern cost management | Yes | Useful for specific monitoring needs |

> **Exam Note:** Know that **AWS Budgets** is a cost-management service, while **CloudWatch** is primarily a monitoring and observability service.

---

# CLF-C02 Exam Notes

## AWS Free Tier

- The **AWS Free Tier** allows eligible customers to use certain AWS services within specified limits without paying.
- Free Tier usage is subject to service-specific limits and conditions.
- **AWS Free Tier alerts** can help monitor Free Tier usage.
- Always monitor usage to avoid unexpected charges.

## Billing Alerts

- **CloudWatch billing alerts** can monitor billing-related metrics.
- Billing alerts can be configured using **CloudWatch Alarms**.
- A CloudWatch alarm can trigger an **SNS notification**.
- Email notifications can be delivered through an **SNS topic**.
- CloudWatch billing alarms are an older billing-monitoring approach but can still be useful.
- **AWS Budgets** provides more comprehensive cost and budget management capabilities.

## CloudWatch

- **Amazon CloudWatch** is a monitoring and observability service.
- CloudWatch works with:
  - Metrics
  - Alarms
  - Logs
  - Monitoring
- A **CloudWatch Alarm** monitors a metric or expression and can trigger an action when a configured condition is met.

## Amazon SNS

- **SNS** = Simple Notification Service.
- SNS is used to send notifications and integrate with AWS services.
- An **SNS Topic** is a communication channel for sending messages to subscribers.
- SNS can send notifications triggered by CloudWatch alarms.
- Email subscriptions may require confirmation.

---

# Quick Revision

    AWS FREE TIER
        ↓
    Use eligible AWS services within Free Tier limits
        ↓
    Monitor usage
        ↓
    Enable Free Tier alerts


    AWS BUDGETS
        ↓
    Monitor and manage AWS costs
        ↓
    Configure budget thresholds
        ↓
    Create alerts/actions


    CLOUDWATCH BILLING ALARM
        ↓
    CloudWatch
        ↓
    Alarms
        ↓
    Billing
        ↓
    Total Estimated Charge
        ↓
    Configure threshold
        ↓
    Alarm: In alarm
        ↓
    SNS Topic
        ↓
    Email Notification

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
| AWS Free Tier | Allows eligible customers to use certain AWS services within specified limits without paying |
| AWS Free Tier Alert | Notification that helps monitor Free Tier usage |
| AWS Budgets | AWS service used to monitor and manage costs and budgets |
| CloudWatch | AWS monitoring and observability service |
| CloudWatch Metric | Time-ordered data point or measurement monitored by CloudWatch |
| CloudWatch Alarm | Monitors a metric or expression and triggers an action when a condition is met |
| Billing Alarm | CloudWatch alarm used to monitor billing-related metrics |
| Total Estimated Charge | Billing metric that can be monitored by CloudWatch |
| Amazon SNS | Simple Notification Service used for notifications and integrations |
| SNS Topic | Communication channel used to send messages to subscribers |
| SNS Subscription | Defines a subscriber that receives messages from an SNS topic |
| Account Alias | Human-readable alias for an AWS account sign-in URL |
| Least Privilege | Giving users only the permissions they need |
