-- Migration 0020: Fable's short id is rejected by Cursor ("Model name is not valid").
-- Prefix it the same way as Astra, Grok, and Gemini so Cursor forwards it to Ungate.
UPDATE OR IGNORE model_mappings
SET id = 'ungate-' || id
WHERE provider = 'claude'
	AND id LIKE 'fable-%';
--> statement-breakpoint
DELETE FROM model_mappings
WHERE provider = 'claude'
	AND id LIKE 'fable-%';
