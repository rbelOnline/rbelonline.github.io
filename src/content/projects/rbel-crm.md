---
title: RBEL CRM
summary: A CRM and analytics platform for financial advisors that manages clients, policies, and beneficiaries, and automates birthday greetings, payment reminders, and social posting.
image: /images/projects/rbel-crm.png
tech:
    [
        React,
        TypeScript,
        Laravel,
        MySQL,
        Tailwind CSS,
        Recharts,
        TanStack Query,
        Meta Graph API,
    ]
demo: https://rbel-crm-demo.vercel.app/
repo: https://github.com/rbelOnline/rbel-crm
featured: true
order: 1
date: 2026-01-15
live: true
layers:
    - name: Frontend
      detail: React 19 and TypeScript SPA with React Router, TanStack Query, react-hook-form with zod validation, shadcn/ui components, and Recharts dashboards.
    - name: API
      detail: Laravel 13 REST API with Sanctum cookie authentication, role-based access (admin, advisor, assistant), form request validation, and a full audit trail.
    - name: Database
      detail: MySQL 8 with views, CTEs, window functions, stored procedures, generated columns, and CHECK constraints powering the analytics.
    - name: Automation
      detail: A scheduler runs every minute to send birthday and payment-reminder emails and to publish scheduled Facebook posts.
# api:
#     method: GET
#     path: /api/dashboard
#     response: |
#         {
#           "total_clients": 248,
#           "pending_policy_delivery": 5,
#           "due_today": { "premiums": 3, "reminders": 4 },
#           "churn_rate": 0.06
#         }
---

## Overview

RBEL CRM is a client management and analytics platform built for financial
advisors. It keeps clients, leads, policies, and beneficiaries in one place,
turns policy data into sales and retention insights, and automates the routine
communication that keeps client relationships active.

## Features

- **Dashboard:** total clients, pending policy deliveries, goals, and churn, plus
  premiums due today, birthdays, policy anniversaries, and a monthly sales chart
- **Clients and leads:** searchable, filterable client records with a policy
  timeline; leads convert into clients when they buy
- **Policies:** policy owners and insureds tracked separately, beneficiaries with
  primary and contingent allocations validated to 100%, and policy reviews
- **Coverage documents:** secure upload, viewing, and download of policy files,
  plus Word and PDF document templates filled from client data
- **Analytics:** monthly and annual premium (APE), year-over-year growth, product
  and payment-mode breakdowns, age and generation distribution, top clients,
  retention, and churn
- **Automations:** daily birthday greetings and premium-due reminders by email,
  with a preview of today's recipients before anything is sent
- **Email and Viber templates:** reusable messages with placeholders and live
  preview
- **Content planner:** weekly Facebook Page posts with images, published
  automatically on schedule
- **Group Assistant:** prepares posts for Facebook groups with caption variations
  and a rotation schedule, supported by a companion browser extension
- **Reminders, goals, calendar, and sales spiels** for daily planning
- **Roles and audit log:** admin, advisor, and assistant permissions, with every
  change recorded as old and new values

## Highlights

- Analytics written in SQL with views, window functions (DENSE_RANK, LAG/LEAD),
  and stored procedures
- A strict owner-versus-insured rule enforced in the schema, API, UI, analytics,
  and tests
- Security-minded: throttled login, private file storage with content checks,
  and masked email logs
