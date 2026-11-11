---
title: MyGems Business Management System
summary: An all-in-one business system for online sellers that syncs Etsy and Raket sales, tracks goals, and plans and auto-publishes Facebook content.
image: /images/projects/mygems-bms.png
tech:
    [
        React,
        TypeScript,
        Inertia.js,
        Laravel,
        MySQL,
        Tailwind CSS,
        Etsy API,
        Meta Graph API,
    ]
demo: https://mygems-bms.vercel.app/
repo: https://github.com/rbelOnline/mygems-bms
order: 2
date: 2026-11-01
live: true
layers:
    - name: Frontend
      detail: React 19 and TypeScript single-page app via Inertia.js, with Tailwind CSS and Radix UI components across dashboards, calendars, boards, and data tables.
    - name: Backend
      detail: Laravel 13 (PHP 8.3) with role-based access per module, CSV import and export, and scheduled jobs for syncing and auto-publishing.
    - name: Integrations
      detail: OAuth connections to Etsy and Raket that sync sales every 15 minutes, and the Meta Graph API for publishing posts and tracking Page followers.
    - name: Database
      detail: MySQL for sales, products, goals, content plans, schedules, and per-user module permissions.
    - name: Hosting
      detail: Deployed on Vercel (Singapore region) with a serverless PHP runtime.
---

## Overview

MyGems Business Management System is an all-in-one workspace for online sellers.
It brings sales from multiple marketplaces, product listings, marketing content,
and business goals into one dashboard, and automates the repetitive work of
syncing orders and publishing posts.

## Features

- **Dashboard and analytics:** total sales, orders, average order value, monthly
  sales trends, and top products and customers
- **Sales management:** record sales manually, import or export CSV, and sync
  orders automatically from Etsy and Raket
- **Product catalog:** products with categories, SEO listing titles, and design
  links, with bulk CSV import
- **Content planner:** plan Facebook posts week by week with images, then
  schedule them to publish automatically to a connected Page
- **Posting tracker:** a daily checklist of posting links per platform, with
  export
- **Goals:** sales, followers, subscribers, and posting goals with on-track
  status; follower goals update automatically from Facebook
- **Calendar:** recurring schedule items with labels, completion, and skips
- **Design templates:** a board for tracking design work step by step
- **User management:** accounts with per-module view, edit, and delete
  permissions

## Highlights

- Background jobs sync marketplace sales every 15 minutes and publish due posts
  every minute
- Module-based permissions let each team member see only what they need
- Built on the Laravel React starter kit with a fully typed React frontend
