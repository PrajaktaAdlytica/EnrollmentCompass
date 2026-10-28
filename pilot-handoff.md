# EnrollmentCompass pilot handoff

Research-stage concept. No live enrollment, applicant database, messages, funding, or measured outcomes. The website's provisional scope is California CalFresh, an English/Spanish sample flow, and one fictional cohort. The proposed first test is Benefits Proof, interview follow-up and missed-contact recovery.

## Brief

The proposed buyer is a CBO program director with funded enrollment services. A navigator is the daily user; an applicant is the beneficiary. Privacy leadership and an authorized agency contact constrain any live implementation. A funding organization would pay; applicants are not assumed to pay.

The hypothesis is that a shared source, named owner, and documented next action could help teams complete handoffs. Test that hypothesis with a baseline and governed measurement. Do not equate a handoff with eligibility approval. Keep all five module directions separately testable.

## Source-refresh checklist

1. Identify the official state/county publisher, program, jurisdiction, URL, and responsible maintainer.
2. Check for newer notices and changed application destinations.
3. Compare every actionable sentence with the underlying source. A federal directory does not replace live state/county instructions.
4. Record checked-on date separately from an effective date; leave effective date unknown unless the publisher states it.
5. Review English and Spanish together with a qualified reviewer. Record unresolved questions.
6. Pause actionable guidance on contradiction or staleness, route to a human, and record the next review trigger.

Starting sources are listed in `src/data.js` and linked on the site: CDSS CalFresh, BenefitsCal, the CDSS GetCalFresh transition notice, the USDA SNAP state directory, and CDSS Spanish-language information. General source context does not authenticate a fictional appointment or establish eligibility.

## Bilingual sample flow

All copy below is a draft requiring independent language review before real use.

| Step | English | Español |
| --- | --- | --- |
| Scope | This is a fictional example. No application is submitted. | Este es un ejemplo ficticio. No se envía ninguna solicitud. |
| Permission | A real navigator would explain the purpose, recipients, and choices before asking for permission. | Una persona orientadora explicaría el propósito, los destinatarios y las opciones antes de pedir su permiso. |
| Next step | Your sample interview is November 4, 2026, at 10:30 a.m. Pacific. Confirm real instructions with your agency. | Su entrevista de ejemplo es el 4 de noviembre de 2026 a las 10:30 a. m., hora del Pacífico. Confirme las instrucciones reales con su agencia. |
| Uncertainty | The address-related question needs clarification. This checklist is not a prerequisite to applying. | La pregunta sobre el domicilio necesita aclaración. Esta lista no es un requisito para solicitar beneficios. |
| Human help | Ask a navigator for help. | Pedir ayuda humana. |
| Withdrawal | Demo consent withdrawn. Outreach is blocked. | Consentimiento retirado. No se permite contacto. |
| Boundary | Screening does not determine eligibility. | La orientación preliminar no determina la elegibilidad. |

## Synthetic fixture and evidence

`src/data.js` contains ten fabricated records GB-011–GB-020: four pending, three blocked, two completed handoff tasks, and one rejected recommendation. Fictional owners are Maya Chen, Luis Vega, and Ava Brooks. Records include chronological creation/update timestamps and dated next actions.

GB-016 is the principal story: Spanish reminder draft, fictional November 4 interview, unresolved proof-of-address checklist question, Maya Chen as reviewer, and fictional source note GB-016-A. GB-017 demonstrates an honest failure: the proposed date conflicts with evidence, so a human rejects the recommendation. GB-019 has withdrawn consent and permits no outreach. Completed and rejected are task states, never benefit determinations.

## Consent and retention map

| Stage | Preview behavior | Required live-pilot decision |
| --- | --- | --- |
| Intake | Static fictional fixtures | Minimum data and purpose; no preselected consent |
| Permission | Fixture begins with example permission | Record clear scope, recipients, communication channels, and revocation mechanism |
| Use | In-memory UI state only | Approved roles and authorized purposes |
| Review | Approve/reject alters local UI; sends nothing | Human reviewer, evidence, audit trail, and approved sending channel |
| Withdrawal | Blocks fictional outreach preparation and callback | Propagate revocation across approved processors and explain effect on existing records |
| Session clearing | Resets example state | Distinguish session reset from data deletion |
| Retention/deletion | No applicant storage or live deletion system | Approve schedule, exceptions, backups, and request handling before collection |

## Accessibility review checklist

Verify keyboard order, visible focus, menu dismissal, form labels/errors, contrast, screen-reader announcements, zoom/reflow, mobile touch targets, reduced motion, and longer Spanish text. Test with actual assistive technology and representative users before launch. The current browser checks are documented in `design-qa.md`; they are not a conformance certification.

## Organization outreach draft — not sent

“Hello [program director], we are researching EnrollmentCompass, a proposed interview follow-up workflow for community enrollment teams. Could we discuss how your navigators handle missed contact, draft review, and warm handoffs? We have a synthetic California CalFresh preview. We would like to evaluate whether a funded, opt-in cohort is useful and accessible through your existing service arrangements. The initial $2,500 eight-week cohort price is a test hypothesis. A real pilot would require a named program owner, consent/data-sharing review, a source-maintenance owner, and signed funding. We are not a government agency and do not determine eligibility.”

Use organization-directed CBO networks, health-plan outreach, hospital social-work groups, appropriate county procurement, or philanthropy pilot channels. A future small capped LinkedIn test could compare “missed interview handoff” and “navigator follow-up burden.” Measure qualified funded conversations, not applicant clicks. Do not target people by inferred benefit, language, or health status.

## Funded pilot scorecard and gates

| Measure | Evidence needed | Current status |
| --- | --- | --- |
| Funding | Signed cohort agreement and named budget owner | Not demonstrated |
| Readiness | Named navigator lead, data agreement, consent process, source owner | Not demonstrated |
| Documented handoffs | Receiving team, date, next action, consistent denominator | Not measured |
| Application completion | Authorized status, unknowns retained | Not measured |
| Missed interviews | Comparable cohort and baseline | Not measured |
| Staff minutes | Agreed sampling method | Not measured |
| Drop-off by language | Governed, privacy-protected comparison | Not measured |
| Adverse guidance | Incidents, escalation, correction, unequal effects | Not measured |

Proceed only after signed funding and the readiness gates. Pivot to the caseworker dashboard if applicant messaging is not permitted. Stop if inequitable errors persist or contracts are inaccessible. Expand only when measured outcomes and funded contracts justify maintenance capacity. Public benefit disbursements are not addressable startup revenue.

For later organization tracking: state/program, language scope, source review date, CBO budget owner, consent mechanism, data agreement, cohort size, handoff completion, missed interviews, staff minutes, governed drop-off comparison, funded fee, and adverse incidents. Keep sensitive pilot measurement separate from website analytics. Any future website events should exclude form answers, benefit status, language/health identifiers, and applicant PII.
