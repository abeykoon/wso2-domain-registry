
-- ============================================================
-- WSO2 Domain Registry — PostgreSQL dump
-- Generated: 2026-03-02T17:47:31.166Z
-- ============================================================

BEGIN;

-- Extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ------------------------------------------------------------
-- Tables
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "Domain" (
    "id"          TEXT        NOT NULL,
    "name"        TEXT        NOT NULL,
    "description" TEXT,
    "status"      TEXT        NOT NULL DEFAULT 'ACTIVE',
    "environment" TEXT        NOT NULL DEFAULT 'PRODUCTION',
    "owner"       TEXT        NOT NULL,
    "team"        TEXT,
    "createdAt"   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt"   TIMESTAMPTZ NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Subdomain" (
    "id"          TEXT        NOT NULL,
    "name"        TEXT        NOT NULL,
    "fullDomain"  TEXT        NOT NULL,
    "description" TEXT,
    "purpose"     TEXT        NOT NULL DEFAULT 'OTHER',
    "status"      TEXT        NOT NULL DEFAULT 'ACTIVE',
    "environment" TEXT        NOT NULL DEFAULT 'PRODUCTION',
    "targetIP"    TEXT,
    "sslEnabled"  BOOLEAN     NOT NULL DEFAULT TRUE,
    "createdAt"   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt"   TIMESTAMPTZ NOT NULL,
    "domainId"    TEXT        NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT "Subdomain_domainId_fkey"
        FOREIGN KEY ("domainId") REFERENCES "Domain" ("id")
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "DomainRequest" (
    "id"                  TEXT        NOT NULL,
    "type"                TEXT        NOT NULL,
    "status"              TEXT        NOT NULL DEFAULT 'PENDING',
    "priority"            TEXT        NOT NULL DEFAULT 'MEDIUM',
    "title"               TEXT        NOT NULL,
    "description"         TEXT        NOT NULL,
    "justification"       TEXT,
    "requestedBy"         TEXT        NOT NULL,
    "requestedAt"         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt"           TIMESTAMPTZ NOT NULL,
    "proposedName"        TEXT,
    "proposedEnvironment" TEXT,
    "proposedPurpose"     TEXT,
    "proposedDescription" TEXT,
    "currentValue"        TEXT,
    "proposedValue"       TEXT,
    "domainId"            TEXT,
    "subdomainId"         TEXT,
    PRIMARY KEY ("id"),
    CONSTRAINT "DomainRequest_domainId_fkey"
        FOREIGN KEY ("domainId") REFERENCES "Domain" ("id")
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "DomainRequest_subdomainId_fkey"
        FOREIGN KEY ("subdomainId") REFERENCES "Subdomain" ("id")
        ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "Approval" (
    "id"         TEXT        NOT NULL,
    "requestId"  TEXT        NOT NULL,
    "approvedBy" TEXT        NOT NULL,
    "status"     TEXT        NOT NULL,
    "comment"    TEXT,
    "createdAt"  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY ("id"),
    CONSTRAINT "Approval_requestId_fkey"
        FOREIGN KEY ("requestId") REFERENCES "DomainRequest" ("id")
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "Comment" (
    "id"        TEXT        NOT NULL,
    "requestId" TEXT        NOT NULL,
    "author"    TEXT        NOT NULL,
    "content"   TEXT        NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY ("id"),
    CONSTRAINT "Comment_requestId_fkey"
        FOREIGN KEY ("requestId") REFERENCES "DomainRequest" ("id")
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "AuditLog" (
    "id"          TEXT        NOT NULL,
    "action"      TEXT        NOT NULL,
    "entityType"  TEXT        NOT NULL,
    "entityId"    TEXT        NOT NULL,
    "performedBy" TEXT        NOT NULL,
    "details"     TEXT,
    "createdAt"   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "domainId"    TEXT,
    "subdomainId" TEXT,
    "requestId"   TEXT,
    PRIMARY KEY ("id"),
    CONSTRAINT "AuditLog_domainId_fkey"
        FOREIGN KEY ("domainId") REFERENCES "Domain" ("id")
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "AuditLog_subdomainId_fkey"
        FOREIGN KEY ("subdomainId") REFERENCES "Subdomain" ("id")
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "AuditLog_requestId_fkey"
        FOREIGN KEY ("requestId") REFERENCES "DomainRequest" ("id")
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- ------------------------------------------------------------
-- Unique indexes
-- ------------------------------------------------------------

CREATE UNIQUE INDEX IF NOT EXISTS "Domain_name_key"       ON "Domain"("name");
CREATE UNIQUE INDEX IF NOT EXISTS "Subdomain_fullDomain_key" ON "Subdomain"("fullDomain");

-- ------------------------------------------------------------
-- Prisma migrations bookkeeping
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    "id"                    TEXT        NOT NULL,
    "checksum"              TEXT        NOT NULL,
    "finished_at"           TIMESTAMPTZ,
    "migration_name"        TEXT        NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        TIMESTAMPTZ,
    "started_at"            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "applied_steps_count"   INTEGER     NOT NULL DEFAULT 0,
    PRIMARY KEY ("id")
);

-- ------------------------------------------------------------
-- Data
-- ------------------------------------------------------------

INSERT INTO "Domain" ("id", "name", "description", "status", "environment", "owner", "team", "createdAt", "updatedAt") VALUES ('cmm9dycpl0000ngd6cztt9tdh', 'wso2.com', 'Primary WSO2 corporate and product domain', 'ACTIVE', 'PRODUCTION', 'platform-team', 'Platform Engineering', '2026-03-02T16:20:54.873Z', '2026-03-02T16:20:54.873Z');
INSERT INTO "Domain" ("id", "name", "description", "status", "environment", "owner", "team", "createdAt", "updatedAt") VALUES ('cmm9dycpm0001ngd6ezlprycc', 'asgardeo.io', 'Asgardeo Identity-as-a-Service platform', 'ACTIVE', 'PRODUCTION', 'identity-team', 'Identity & Access Management', '2026-03-02T16:20:54.875Z', '2026-03-02T16:20:54.875Z');
INSERT INTO "Domain" ("id", "name", "description", "status", "environment", "owner", "team", "createdAt", "updatedAt") VALUES ('cmm9dycpn0002ngd6a4qft346', 'choreo.dev', 'Choreo internal developer platform', 'ACTIVE', 'PRODUCTION', 'choreo-team', 'Choreo Platform', '2026-03-02T16:20:54.876Z', '2026-03-02T16:20:54.876Z');
INSERT INTO "Domain" ("id", "name", "description", "status", "environment", "owner", "team", "createdAt", "updatedAt") VALUES ('cmm9dycpo0003ngd6qoxb6n21', 'staging.wso2.com', 'WSO2 staging environment for pre-production testing', 'ACTIVE', 'STAGING', 'platform-team', 'Platform Engineering', '2026-03-02T16:20:54.876Z', '2026-03-02T16:20:54.876Z');
INSERT INTO "Domain" ("id", "name", "description", "status", "environment", "owner", "team", "createdAt", "updatedAt") VALUES ('cmm9dycpo0004ngd6odn8572j', 'dev.wso2.com', 'WSO2 internal development environment', 'ACTIVE', 'DEVELOPMENT', 'devops-team', 'DevOps', '2026-03-02T16:20:54.876Z', '2026-03-02T16:20:54.876Z');
INSERT INTO "Domain" ("id", "name", "description", "status", "environment", "owner", "team", "createdAt", "updatedAt") VALUES ('cmm9dycpo0005ngd6majryei5', 'ballerina.io', 'Ballerina programming language platform', 'ACTIVE', 'PRODUCTION', 'ballerina-team', 'Ballerina', '2026-03-02T16:20:54.877Z', '2026-03-02T16:20:54.877Z');

INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpp0006ngd68qfjjgs5', 'api', 'api.wso2.com', 'WSO2 public API gateway endpoint', 'API', 'ACTIVE', 'PRODUCTION', '203.0.113.10', TRUE, '2026-03-02T16:20:54.877Z', '2026-03-02T16:20:54.877Z', 'cmm9dycpl0000ngd6cztt9tdh');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpp0007ngd6p0izai79', 'identity', 'identity.wso2.com', 'WSO2 Identity Server public endpoint', 'API', 'ACTIVE', 'PRODUCTION', '203.0.113.11', TRUE, '2026-03-02T16:20:54.877Z', '2026-03-02T16:20:54.877Z', 'cmm9dycpl0000ngd6cztt9tdh');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpp0008ngd6xkyy54ix', 'docs', 'docs.wso2.com', 'WSO2 product documentation site', 'DOCS', 'ACTIVE', 'PRODUCTION', '203.0.113.12', TRUE, '2026-03-02T16:20:54.877Z', '2026-03-02T16:20:54.877Z', 'cmm9dycpl0000ngd6cztt9tdh');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpp0009ngd612yzbc4d', 'console', 'console.wso2.com', 'WSO2 management console web app', 'WEB_APP', 'ACTIVE', 'PRODUCTION', '203.0.113.13', TRUE, '2026-03-02T16:20:54.877Z', '2026-03-02T16:20:54.877Z', 'cmm9dycpl0000ngd6cztt9tdh');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpp000angd6sut80bpw', 'cdn', 'cdn.wso2.com', 'WSO2 content delivery network', 'CDN', 'ACTIVE', 'PRODUCTION', '203.0.113.14', TRUE, '2026-03-02T16:20:54.877Z', '2026-03-02T16:20:54.877Z', 'cmm9dycpl0000ngd6cztt9tdh');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpp000bngd68vs96eot', 'mail', 'mail.wso2.com', 'WSO2 corporate mail server', 'MAIL', 'ACTIVE', 'PRODUCTION', '203.0.113.15', TRUE, '2026-03-02T16:20:54.877Z', '2026-03-02T16:20:54.877Z', 'cmm9dycpl0000ngd6cztt9tdh');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpp000cngd60l61gvb9', 'monitoring', 'monitoring.wso2.com', 'Internal monitoring and observability dashboard', 'MONITORING', 'ACTIVE', 'PRODUCTION', '203.0.113.16', TRUE, '2026-03-02T16:20:54.877Z', '2026-03-02T16:20:54.877Z', 'cmm9dycpl0000ngd6cztt9tdh');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpp000dngd6sfjvqa91', 'analytics', 'analytics.wso2.com', 'WSO2 analytics platform', 'ANALYTICS', 'ACTIVE', 'PRODUCTION', '203.0.113.17', TRUE, '2026-03-02T16:20:54.877Z', '2026-03-02T16:20:54.877Z', 'cmm9dycpl0000ngd6cztt9tdh');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpp000engd67d8zd64q', 'blog', 'blog.wso2.com', 'WSO2 engineering and corporate blog', 'WEB_APP', 'ACTIVE', 'PRODUCTION', '203.0.113.18', TRUE, '2026-03-02T16:20:54.877Z', '2026-03-02T16:20:54.877Z', 'cmm9dycpl0000ngd6cztt9tdh');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000fngd6mrmoiqlf', 'accounts', 'accounts.asgardeo.io', 'Asgardeo user account management portal', 'WEB_APP', 'ACTIVE', 'PRODUCTION', '203.0.113.20', TRUE, '2026-03-02T16:20:54.878Z', '2026-03-02T16:20:54.878Z', 'cmm9dycpm0001ngd6ezlprycc');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000gngd6o0vvg4i2', 'api', 'api.asgardeo.io', 'Asgardeo REST API endpoint', 'API', 'ACTIVE', 'PRODUCTION', '203.0.113.21', TRUE, '2026-03-02T16:20:54.878Z', '2026-03-02T16:20:54.878Z', 'cmm9dycpm0001ngd6ezlprycc');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000hngd63svijbdh', 'console', 'console.asgardeo.io', 'Asgardeo admin console', 'WEB_APP', 'ACTIVE', 'PRODUCTION', '203.0.113.22', TRUE, '2026-03-02T16:20:54.878Z', '2026-03-02T16:20:54.878Z', 'cmm9dycpm0001ngd6ezlprycc');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000ingd60bugxlu8', 'docs', 'docs.asgardeo.io', 'Asgardeo product documentation', 'DOCS', 'ACTIVE', 'PRODUCTION', '203.0.113.23', TRUE, '2026-03-02T16:20:54.878Z', '2026-03-02T16:20:54.878Z', 'cmm9dycpm0001ngd6ezlprycc');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000jngd6xf4vq67l', 'api', 'api.choreo.dev', 'Choreo platform API endpoint', 'API', 'ACTIVE', 'PRODUCTION', '203.0.113.30', TRUE, '2026-03-02T16:20:54.879Z', '2026-03-02T16:20:54.879Z', 'cmm9dycpn0002ngd6a4qft346');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000kngd6njd0hhi0', 'console', 'console.choreo.dev', 'Choreo developer console', 'WEB_APP', 'ACTIVE', 'PRODUCTION', '203.0.113.31', TRUE, '2026-03-02T16:20:54.879Z', '2026-03-02T16:20:54.879Z', 'cmm9dycpn0002ngd6a4qft346');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000lngd6gmny2ovs', 'registry', 'registry.choreo.dev', 'Choreo component and artifact registry', 'INTERNAL', 'ACTIVE', 'PRODUCTION', '203.0.113.32', TRUE, '2026-03-02T16:20:54.879Z', '2026-03-02T16:20:54.879Z', 'cmm9dycpn0002ngd6a4qft346');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000mngd6mj5q7ooo', 'docs', 'docs.choreo.dev', 'Choreo documentation portal', 'DOCS', 'ACTIVE', 'PRODUCTION', '203.0.113.33', TRUE, '2026-03-02T16:20:54.879Z', '2026-03-02T16:20:54.879Z', 'cmm9dycpn0002ngd6a4qft346');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000nngd6w198pb32', 'monitoring', 'monitoring.choreo.dev', 'Choreo internal monitoring', 'MONITORING', 'ACTIVE', 'PRODUCTION', '203.0.113.34', TRUE, '2026-03-02T16:20:54.879Z', '2026-03-02T16:20:54.879Z', 'cmm9dycpn0002ngd6a4qft346');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000ongd668v0xd6d', 'api', 'api.staging.wso2.com', 'API gateway staging endpoint', 'API', 'ACTIVE', 'STAGING', '10.0.1.10', TRUE, '2026-03-02T16:20:54.879Z', '2026-03-02T16:20:54.879Z', 'cmm9dycpo0003ngd6qoxb6n21');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000pngd66u39w4v7', 'identity', 'identity.staging.wso2.com', 'Identity Server staging endpoint', 'API', 'ACTIVE', 'STAGING', '10.0.1.11', TRUE, '2026-03-02T16:20:54.879Z', '2026-03-02T16:20:54.879Z', 'cmm9dycpo0003ngd6qoxb6n21');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpq000qngd68wzcgpwt', 'console', 'console.staging.wso2.com', 'Management console staging', 'WEB_APP', 'ACTIVE', 'STAGING', '10.0.1.12', TRUE, '2026-03-02T16:20:54.879Z', '2026-03-02T16:20:54.879Z', 'cmm9dycpo0003ngd6qoxb6n21');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpr000rngd6u78qvl7v', 'api', 'api.dev.wso2.com', 'API gateway dev endpoint', 'API', 'ACTIVE', 'DEVELOPMENT', '10.0.2.10', FALSE, '2026-03-02T16:20:54.879Z', '2026-03-02T16:20:54.879Z', 'cmm9dycpo0004ngd6odn8572j');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpr000sngd6r278acnf', 'internal', 'internal.dev.wso2.com', 'Internal developer services', 'INTERNAL', 'ACTIVE', 'DEVELOPMENT', '10.0.2.11', FALSE, '2026-03-02T16:20:54.879Z', '2026-03-02T16:20:54.879Z', 'cmm9dycpo0004ngd6odn8572j');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpr000tngd666kec70u', 'central', 'central.ballerina.io', 'Ballerina Central package repository', 'API', 'ACTIVE', 'PRODUCTION', '203.0.113.40', TRUE, '2026-03-02T16:20:54.880Z', '2026-03-02T16:20:54.880Z', 'cmm9dycpo0005ngd6majryei5');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpr000ungd6l99zhux0', 'play', 'play.ballerina.io', 'Ballerina online playground', 'WEB_APP', 'ACTIVE', 'PRODUCTION', '203.0.113.41', TRUE, '2026-03-02T16:20:54.880Z', '2026-03-02T16:20:54.880Z', 'cmm9dycpo0005ngd6majryei5');
INSERT INTO "Subdomain" ("id", "name", "fullDomain", "description", "purpose", "status", "environment", "targetIP", "sslEnabled", "createdAt", "updatedAt", "domainId") VALUES ('cmm9dycpr000vngd66il7c7n0', 'docs', 'docs.ballerina.io', 'Ballerina language documentation', 'DOCS', 'ACTIVE', 'PRODUCTION', '203.0.113.42', TRUE, '2026-03-02T16:20:54.880Z', '2026-03-02T16:20:54.880Z', 'cmm9dycpo0005ngd6majryei5');

INSERT INTO "DomainRequest" ("id", "type", "status", "priority", "title", "description", "justification", "requestedBy", "requestedAt", "updatedAt", "proposedName", "proposedEnvironment", "proposedPurpose", "proposedDescription", "currentValue", "proposedValue", "domainId", "subdomainId") VALUES ('cmm9dycps000xngd6ae83j32f', 'CREATE_SUBDOMAIN', 'PENDING', 'HIGH', 'Add metrics.choreo.dev for Prometheus metrics endpoint', 'We need a dedicated subdomain for exposing Prometheus-compatible metrics from the Choreo platform. This will be used by the SRE team for alerting and dashboards.', 'Current monitoring.choreo.dev serves the UI dashboard. A separate metrics endpoint is needed for machine-readable scraping.', 'sarah.chen', '2026-03-02T16:20:54.880Z', '2026-03-02T16:20:54.880Z', 'metrics', 'PRODUCTION', 'MONITORING', 'Prometheus metrics scraping endpoint for Choreo', NULL, NULL, 'cmm9dycpn0002ngd6a4qft346', NULL);
INSERT INTO "DomainRequest" ("id", "type", "status", "priority", "title", "description", "justification", "requestedBy", "requestedAt", "updatedAt", "proposedName", "proposedEnvironment", "proposedPurpose", "proposedDescription", "currentValue", "proposedValue", "domainId", "subdomainId") VALUES ('cmm9dycps000zngd6bgznffws', 'CREATE_SUBDOMAIN', 'UNDER_REVIEW', 'MEDIUM', 'Add analytics.asgardeo.io for usage analytics dashboard', 'The Asgardeo product team requires an analytics subdomain to host usage dashboards for customers to monitor their identity operations.', 'Customer request — enterprise clients need visibility into login events, MFA usage, and audit logs.', 'james.wilson', '2026-03-02T16:20:54.881Z', '2026-03-02T16:20:54.881Z', 'analytics', 'PRODUCTION', 'ANALYTICS', 'Customer-facing usage analytics for Asgardeo', NULL, NULL, 'cmm9dycpm0001ngd6ezlprycc', NULL);
INSERT INTO "DomainRequest" ("id", "type", "status", "priority", "title", "description", "justification", "requestedBy", "requestedAt", "updatedAt", "proposedName", "proposedEnvironment", "proposedPurpose", "proposedDescription", "currentValue", "proposedValue", "domainId", "subdomainId") VALUES ('cmm9dycpt0013ngd6oo3izkxd', 'MODIFY_SUBDOMAIN', 'APPROVED', 'CRITICAL', 'Update target IP for api.wso2.com — infrastructure migration', 'The WSO2 API gateway is being migrated to a new cloud region. The target IP needs to be updated from 203.0.113.10 to 198.51.100.10.', 'Cloud infrastructure migration to AWS ap-southeast-1 region for latency improvements.', 'devops-team', '2026-03-02T16:20:54.882Z', '2026-03-02T16:20:54.882Z', NULL, NULL, NULL, NULL, '203.0.113.10', '198.51.100.10', 'cmm9dycpl0000ngd6cztt9tdh', NULL);
INSERT INTO "DomainRequest" ("id", "type", "status", "priority", "title", "description", "justification", "requestedBy", "requestedAt", "updatedAt", "proposedName", "proposedEnvironment", "proposedPurpose", "proposedDescription", "currentValue", "proposedValue", "domainId", "subdomainId") VALUES ('cmm9dycpu0017ngd6kwfy7853', 'CREATE_SUBDOMAIN', 'IMPLEMENTED', 'MEDIUM', 'Add play.ballerina.io for online IDE', 'New online playground for Ballerina developers to try code in the browser without local installation.', 'Developer experience initiative — reduce onboarding friction.', 'ballerina-team', '2026-03-02T16:20:54.882Z', '2026-03-02T16:20:54.882Z', 'play', 'PRODUCTION', 'WEB_APP', 'Browser-based Ballerina IDE', NULL, NULL, 'cmm9dycpo0005ngd6majryei5', NULL);
INSERT INTO "DomainRequest" ("id", "type", "status", "priority", "title", "description", "justification", "requestedBy", "requestedAt", "updatedAt", "proposedName", "proposedEnvironment", "proposedPurpose", "proposedDescription", "currentValue", "proposedValue", "domainId", "subdomainId") VALUES ('cmm9dycpv001angd6ffsmsi0b', 'CREATE_DOMAIN', 'PENDING', 'HIGH', 'Register wso2.cloud as new SaaS platform domain', 'WSO2 is launching a new cloud-native SaaS offering. We need the wso2.cloud domain registered and managed through this registry.', 'New product initiative — Q2 2026 launch. Marketing has already secured the domain externally.', 'product-team', '2026-03-02T16:20:54.883Z', '2026-03-02T16:20:54.883Z', 'wso2.cloud', 'PRODUCTION', NULL, 'WSO2 cloud-native SaaS platform domain', NULL, NULL, NULL, NULL);
INSERT INTO "DomainRequest" ("id", "type", "status", "priority", "title", "description", "justification", "requestedBy", "requestedAt", "updatedAt", "proposedName", "proposedEnvironment", "proposedPurpose", "proposedDescription", "currentValue", "proposedValue", "domainId", "subdomainId") VALUES ('cmm9dycpv001cngd6cbi60l6r', 'CREATE_SUBDOMAIN', 'REJECTED', 'LOW', 'Add test.wso2.com for QA environment', 'QA team requesting a public-facing test subdomain for end-to-end testing.', 'Easier external access for QA tools.', 'qa-team', '2026-03-02T16:20:54.883Z', '2026-03-02T16:20:54.883Z', 'test', 'DEVELOPMENT', 'INTERNAL', 'QA testing environment', NULL, NULL, 'cmm9dycpl0000ngd6cztt9tdh', NULL);

INSERT INTO "Approval" ("id", "requestId", "approvedBy", "status", "comment", "createdAt") VALUES ('cmm9dycpt0015ngd6xipv0wzi', 'cmm9dycpt0013ngd6oo3izkxd', 'mike.johnson', 'APPROVED', 'Infrastructure migration approved. Coordinate with DNS team for TTL reduction before cutover.', '2026-03-02T16:20:54.882Z');
INSERT INTO "Approval" ("id", "requestId", "approvedBy", "status", "comment", "createdAt") VALUES ('cmm9dycpu0019ngd6mvrjropy', 'cmm9dycpu0017ngd6kwfy7853', 'mike.johnson', 'APPROVED', 'Approved. Great initiative for developer onboarding.', '2026-03-02T16:20:54.883Z');
INSERT INTO "Approval" ("id", "requestId", "approvedBy", "status", "comment", "createdAt") VALUES ('cmm9dycpv001engd6guohfvk0', 'cmm9dycpv001cngd6cbi60l6r', 'mike.johnson', 'REJECTED', 'Rejected — use dev.wso2.com for internal testing. Public-facing test subdomains are a security risk and violate DNS policy.', '2026-03-02T16:20:54.884Z');

INSERT INTO "Comment" ("id", "requestId", "author", "content", "createdAt") VALUES ('cmm9dycpt0011ngd6so0rgwjn', 'cmm9dycps000zngd6bgznffws', 'priya.sharma', 'Reviewed the architecture. The analytics service uses Clickhouse backend. Need to confirm SSL cert procurement timeline before approval.', '2026-03-02T16:20:54.881Z');

INSERT INTO "AuditLog" ("id", "action", "entityType", "entityId", "performedBy", "details", "createdAt", "domainId", "subdomainId", "requestId") VALUES ('cmm9dycpw001fngd6wlsblt8b', 'DOMAIN_CREATED', 'domain', 'cmm9dycpl0000ngd6cztt9tdh', 'admin', 'Initial domain registration', '2026-03-02T16:20:54.884Z', 'cmm9dycpl0000ngd6cztt9tdh', NULL, NULL);
INSERT INTO "AuditLog" ("id", "action", "entityType", "entityId", "performedBy", "details", "createdAt", "domainId", "subdomainId", "requestId") VALUES ('cmm9dycpw001gngd6309drl0s', 'DOMAIN_CREATED', 'domain', 'cmm9dycpm0001ngd6ezlprycc', 'admin', 'Initial domain registration', '2026-03-02T16:20:54.884Z', 'cmm9dycpm0001ngd6ezlprycc', NULL, NULL);
INSERT INTO "AuditLog" ("id", "action", "entityType", "entityId", "performedBy", "details", "createdAt", "domainId", "subdomainId", "requestId") VALUES ('cmm9dycpw001hngd6qx1t34j2', 'DOMAIN_CREATED', 'domain', 'cmm9dycpn0002ngd6a4qft346', 'admin', 'Initial domain registration', '2026-03-02T16:20:54.884Z', 'cmm9dycpn0002ngd6a4qft346', NULL, NULL);
INSERT INTO "AuditLog" ("id", "action", "entityType", "entityId", "performedBy", "details", "createdAt", "domainId", "subdomainId", "requestId") VALUES ('cmm9dycpw001ingd6vpil7kuh', 'REQUEST_APPROVED', 'request', 'cmm9dycpt0013ngd6oo3izkxd', 'mike.johnson', 'Approved IP migration request', '2026-03-02T16:20:54.884Z', NULL, NULL, 'cmm9dycpt0013ngd6oo3izkxd');
INSERT INTO "AuditLog" ("id", "action", "entityType", "entityId", "performedBy", "details", "createdAt", "domainId", "subdomainId", "requestId") VALUES ('cmm9dycpw001jngd69fktnka2', 'REQUEST_IMPLEMENTED', 'request', 'cmm9dycpu0017ngd6kwfy7853', 'admin', 'Implemented play.ballerina.io subdomain', '2026-03-02T16:20:54.884Z', NULL, NULL, 'cmm9dycpu0017ngd6kwfy7853');
INSERT INTO "AuditLog" ("id", "action", "entityType", "entityId", "performedBy", "details", "createdAt", "domainId", "subdomainId", "requestId") VALUES ('cmm9dycpw001kngd6n15h29oq', 'REQUEST_REJECTED', 'request', 'cmm9dycpv001cngd6cbi60l6r', 'mike.johnson', 'Rejected test subdomain request — policy violation', '2026-03-02T16:20:54.884Z', NULL, NULL, 'cmm9dycpv001cngd6cbi60l6r');
INSERT INTO "AuditLog" ("id", "action", "entityType", "entityId", "performedBy", "details", "createdAt", "domainId", "subdomainId", "requestId") VALUES ('cmm9dycpw001lngd68jau1sqx', 'REQUEST_CREATED', 'request', 'cmm9dycps000xngd6ae83j32f', 'sarah.chen', 'Submitted metrics.choreo.dev request', '2026-03-02T16:20:54.884Z', NULL, NULL, 'cmm9dycps000xngd6ae83j32f');
INSERT INTO "AuditLog" ("id", "action", "entityType", "entityId", "performedBy", "details", "createdAt", "domainId", "subdomainId", "requestId") VALUES ('cmm9dycpw001mngd6z4stiqxr', 'REQUEST_CREATED', 'request', 'cmm9dycpv001angd6ffsmsi0b', 'product-team', 'Submitted wso2.cloud domain request', '2026-03-02T16:20:54.884Z', NULL, NULL, 'cmm9dycpv001angd6ffsmsi0b');

COMMIT;

-- ============================================================
-- Summary
-- Domains:       6
-- Subdomains:    26
-- Requests:      6
-- Approvals:     3
-- Comments:      1
-- AuditLogs:     8
-- ============================================================
