-- BUSINESSFORGE ENTERPRISE — STAGE 4 BUSINESS INTELLIGENCE CORE
-- Run once in Supabase SQL Editor before deploying Stage 4.
-- Additive only: no existing table or record is removed.

begin;
create table if not exists public.business_intelligence_events (
  id uuid primary key default gen_random_uuid(), business_id uuid not null,
  audit_report_id text, module_id text not null, event_type text not null default 'audit_completed',
  source_score numeric, risk_rating text, payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists bic_events_business_created_index on public.business_intelligence_events (business_id, created_at desc);
create index if not exists bic_events_audit_report_index on public.business_intelligence_events (audit_report_id);

create table if not exists public.business_genome_state (
  id uuid primary key default gen_random_uuid(), business_id uuid not null,
  dimension_key text not null, dimension_label text not null, pillar text not null,
  score numeric check (score between 0 and 100), previous_score numeric check (previous_score between 0 and 100),
  measurement_count integer not null default 0 check (measurement_count >= 0),
  confidence text not null default 'unmeasured', source_module text, last_audit_report_id text,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  unique (business_id, dimension_key)
);
create index if not exists genome_state_business_pillar_index on public.business_genome_state (business_id, pillar);

create table if not exists public.business_intelligence_snapshots (
  id uuid primary key default gen_random_uuid(), business_id uuid not null,
  audit_report_id text, module_id text not null, health_score numeric, compliance_score numeric,
  profit_score numeric, operations_score numeric, coverage numeric, maturity_level integer,
  maturity_label text, trend_direction text, genome jsonb not null default '[]'::jsonb,
  kpis jsonb not null default '{}'::jsonb, trends jsonb not null default '{}'::jsonb,
  coaching jsonb not null default '{}'::jsonb, anomalies jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists bic_snapshots_business_created_index on public.business_intelligence_snapshots (business_id, created_at desc);

create or replace view public.business_intelligence_latest as
select distinct on (business_id) business_id, audit_report_id, module_id, health_score,
  compliance_score, profit_score, operations_score, coverage, maturity_level, maturity_label,
  trend_direction, genome, kpis, trends, coaching, anomalies, created_at
from public.business_intelligence_snapshots
order by business_id, created_at desc;
commit;
