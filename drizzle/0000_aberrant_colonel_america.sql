CREATE TABLE `blind_templates_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`template` text NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `blinds_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`blind_template_id` integer NOT NULL,
	`file` blob NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`blind_template_id`) REFERENCES `blind_templates_table`(`id`) ON UPDATE no action ON DELETE no action
);
