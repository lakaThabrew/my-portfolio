---
description: |
  This workflow creates weekly repo status reports. It gathers recent repository
  activity (issues, PRs, discussions, releases, code changes) over the past week and generates
  engaging GitHub issues with productivity insights, community highlights,
  and project recommendations.

on:
  schedule:
    - cron: '0 9 * * 1'  # Every Monday at 09:00 UTC
  workflow_dispatch:
---
permissions:
  issues: write

# Weekly Repo Status
Create an upbeat weekly status report for the repo as a GitHub issue.

## What to include

- Recent repository activity over the past week (issues, PRs, discussions, releases, code changes)
- Progress tracking, goal reminders and highlights
- Project status and recommendations
- Actionable next steps for maintainers for the upcoming week

## Style

- Be positive, encouraging, and helpful 🌟
- Use emojis moderately for engagement
- Keep it concise - adjust length based on actual activity

## Process

1. Gather activity from the repository from the last 7 days
2. Study the repository, its issues and its pull requests
3. Create a new GitHub issue with your weekly findings and insights
