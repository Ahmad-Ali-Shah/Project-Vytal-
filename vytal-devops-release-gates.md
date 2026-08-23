---
name: vytal-devops-release-gates
description: CI/CD deployment pipelines, Vite build checks, Alibaba Cloud sync, and instant rollback gates for sara (DevOps Engineer)
version: 1.0.0
---

# Vytal DevOps Release Gates Skill

## Role & Scope
- **Agent:** `sara` (DevOps Engineer / Waker `f37c976fa739`)
- **Focus:** Production build reliability (npm run build), GitHub release sync, Alibaba Cloud OSS deployment, and zero-downtime rollback triggers.

## Core Capabilities
1. **Verification Gate:** Deployment execution ONLY upon formal sign-off from `Ahmad ALI` (QA).
2. **One-Command Rollback:** Maintaining automated rollback script in case of smoke test failures.
