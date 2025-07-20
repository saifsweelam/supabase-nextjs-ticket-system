SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'd12f053a-5bd3-4cef-9e32-c401ba2d584a', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"saifsweelam@gmail.com","user_id":"f3979723-9017-4ba8-935b-0a4eccfff566","user_phone":""}}', '2025-07-10 07:41:02.632994+00', ''),
	('00000000-0000-0000-0000-000000000000', '0ef1512e-3953-4321-a00d-27e38b811fbf', '{"action":"user_deleted","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"saifsweelam@gmail.com","user_id":"f3979723-9017-4ba8-935b-0a4eccfff566","user_phone":""}}', '2025-07-10 08:20:18.332305+00', ''),
	('00000000-0000-0000-0000-000000000000', '30806992-9a77-48b9-ab60-77ab87989117', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"saifsweelam@gmail.com","user_id":"0dcc1802-d0db-426f-b95d-76327e091600","user_phone":""}}', '2025-07-10 08:20:37.892657+00', ''),
	('00000000-0000-0000-0000-000000000000', '07dd359a-5c5c-476a-9a7a-ad797ea2867e', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 08:52:56.454067+00', ''),
	('00000000-0000-0000-0000-000000000000', '57a30799-2eac-485f-9780-4f3573eeca65', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 08:57:29.096929+00', ''),
	('00000000-0000-0000-0000-000000000000', '8a1d7038-2ec3-49f0-b4e7-656f4fba14d4', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 09:12:32.05269+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cd84e024-bceb-450c-ac36-42389b764512', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 09:14:27.625968+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd90ccb42-f5c6-4d09-ad37-505abaeae7cd', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 09:15:57.019874+00', ''),
	('00000000-0000-0000-0000-000000000000', '5dcc5e87-4175-4017-bfa9-1cd63e5c379d', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 09:46:29.722134+00', ''),
	('00000000-0000-0000-0000-000000000000', '8ebeccdf-25e6-453f-a147-60db6ef9c94d', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 09:46:37.893288+00', ''),
	('00000000-0000-0000-0000-000000000000', '06c2090c-10ca-480e-952f-a8f62b74934e', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 09:46:55.573378+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c9eb44a0-870c-4b0d-8cb1-04cd51d1ddcc', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 09:46:58.315027+00', ''),
	('00000000-0000-0000-0000-000000000000', '722daebd-6439-47d8-b4f4-6b65df306d50', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 09:56:52.835529+00', ''),
	('00000000-0000-0000-0000-000000000000', '76e32cd6-31f9-4af2-bb60-5e2c2bac38e6', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 09:56:55.199116+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0d4ca71-98ff-4dec-b4a5-fa13ee57c695', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 09:57:02.620617+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd253929b-d477-4ed3-82af-ff6821389b19', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 10:01:21.681872+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cf3cd052-83ca-4356-bf16-4f7e394a9940', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 10:01:23.464462+00', ''),
	('00000000-0000-0000-0000-000000000000', '121c5675-6004-48c8-956d-7fd17c9251cb', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 10:01:26.712807+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c1a9f03b-7bc2-4d7f-a803-b5e5df12ec02', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 10:01:28.801641+00', ''),
	('00000000-0000-0000-0000-000000000000', '48c26b2e-7e97-4058-ab6c-0b7134698f53', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 10:01:31.815708+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c1f43816-d93f-458d-98ed-c71e4f43b78e', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 10:01:33.460261+00', ''),
	('00000000-0000-0000-0000-000000000000', '7a221ddf-446c-4f53-a758-db5606f3ead7', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 10:02:05.341393+00', ''),
	('00000000-0000-0000-0000-000000000000', '63524e09-6eab-43ff-825a-427852cdd2ec', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 10:02:07.034392+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b7f8e35e-9004-4743-a5e7-a1d9f86811fb', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 10:08:37.367105+00', ''),
	('00000000-0000-0000-0000-000000000000', '201224ac-813d-46f5-b59f-80fbac0f3a3c', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 10:08:39.975376+00', ''),
	('00000000-0000-0000-0000-000000000000', '5b85b01e-cefa-4b8f-80b6-f83aa71c2701', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 10:08:44.723345+00', ''),
	('00000000-0000-0000-0000-000000000000', '39799ab0-f2ea-48f4-9985-91aa337b6c86', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 10:08:46.172564+00', ''),
	('00000000-0000-0000-0000-000000000000', '631fbc06-7772-4a61-8450-4bcc6fc147f6', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 10:08:53.624309+00', ''),
	('00000000-0000-0000-0000-000000000000', '5d47ea08-7384-40f8-8b0a-88a514c75ac4', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 10:09:01.549211+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c30762fc-3edd-4365-a093-e47df5587661', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-10 11:07:46.209732+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a69e90db-c018-4794-b2c5-dbea929b6429', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-10 11:07:46.222093+00', ''),
	('00000000-0000-0000-0000-000000000000', '339bff3e-dba2-4d40-9816-eb6629c7390c', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-10 11:07:55.014172+00', ''),
	('00000000-0000-0000-0000-000000000000', '03469745-b773-4629-811d-bc2133cdf025', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 11:08:19.550499+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f3a285d-022a-4158-b780-5ac74b7738de', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 11:08:34.056197+00', ''),
	('00000000-0000-0000-0000-000000000000', '2efee580-1c1c-48fc-b01d-f85406c35112', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 11:12:24.446249+00', ''),
	('00000000-0000-0000-0000-000000000000', '1c2dbfaf-762c-4a2f-b8d3-6bfd3ac3709b', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 11:12:27.546911+00', ''),
	('00000000-0000-0000-0000-000000000000', '7258643b-405a-4855-90b5-669fef1966dd', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 11:13:07.199803+00', ''),
	('00000000-0000-0000-0000-000000000000', '11c2ed81-1d57-437e-93a4-3577bca13f02', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 11:13:09.029994+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b1aab1f3-1485-40e7-9708-562e03312fe3', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-10 12:11:19.173309+00', ''),
	('00000000-0000-0000-0000-000000000000', '151b5cab-3217-4707-94e2-cf3a677d19e9', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-10 12:11:19.180173+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cb5023f6-e144-4a38-a984-51fd3c99ec08', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-10 16:36:35.962395+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aba975af-6995-426f-ab0b-a16d6f4e7bff', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-10 16:36:35.979042+00', ''),
	('00000000-0000-0000-0000-000000000000', '4b4ba665-616a-41c7-abd6-24472693e20e', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 16:36:55.752844+00', ''),
	('00000000-0000-0000-0000-000000000000', '238570cd-4db8-4c19-b667-945c4c7a1ff9', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 16:37:39.354613+00', ''),
	('00000000-0000-0000-0000-000000000000', '5cdfec5d-2ddd-4e5d-bfd6-a227a919b28b', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 16:37:43.648091+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e0b605dc-e590-4bc0-8b79-70593db06930', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 16:37:45.321333+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e9b19d92-c1fb-44f8-afeb-c18033ba2be8', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 16:37:48.361483+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bbda0947-23de-45c9-b38d-91e4148eb60a', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 16:37:51.828519+00', ''),
	('00000000-0000-0000-0000-000000000000', '6fa685e0-79e3-4fa7-9da3-d354ea84b376', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 16:38:38.209568+00', ''),
	('00000000-0000-0000-0000-000000000000', '8d189613-62ac-4c51-af1f-c357f3171e06', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 16:38:40.198739+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ce0af90e-51d0-4e5c-afee-d2f72a556e52', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-10 18:06:57.390657+00', ''),
	('00000000-0000-0000-0000-000000000000', '07e4c9cf-fd55-40ca-97a0-0e9e2b4191ff', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-10 18:06:57.404805+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ee8bd5b0-5b5a-4b4a-a629-277a978f2525', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-10 18:07:07.007202+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b84208d-0c3f-45c0-890e-051074aba4b7', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-10 18:07:09.155273+00', ''),
	('00000000-0000-0000-0000-000000000000', '10e30d8b-7a31-433b-82d7-a38513a847c7', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-11 19:08:57.782024+00', ''),
	('00000000-0000-0000-0000-000000000000', '073c025b-5e16-44bd-9f1a-16fa03ba888c', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-11 19:08:57.808316+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bccb9d19-597a-4595-9e52-0191fb8b6c0f', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-11 22:33:50.803468+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a6e1fa61-1271-4d4f-b70f-d1ce0c26f57f', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-11 22:33:50.812364+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e1d51e0e-0be7-47da-a236-a8eda52bc023', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-13 07:58:16.557793+00', ''),
	('00000000-0000-0000-0000-000000000000', '7d43e2f1-3832-4d0e-9545-029ac4d47442', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-13 07:58:16.583781+00', ''),
	('00000000-0000-0000-0000-000000000000', '93cc7345-a49e-4aae-a667-a7f7e4fb2b95', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-13 07:58:51.072861+00', ''),
	('00000000-0000-0000-0000-000000000000', '5f4ad4b6-01e0-4988-aeca-558f12c2bbac', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-13 07:59:02.771622+00', ''),
	('00000000-0000-0000-0000-000000000000', '492e72bf-c802-4adf-a45e-77285699a406', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-13 08:01:30.240255+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e9189725-f713-4024-8e94-ee5e2df83788', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-13 08:01:33.011043+00', ''),
	('00000000-0000-0000-0000-000000000000', '04076bf4-0721-4591-80a9-7413b50964ad', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-13 08:04:08.061607+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f8be8529-d185-4172-9876-0a43c5d1f2c2', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-13 08:07:09.101744+00', ''),
	('00000000-0000-0000-0000-000000000000', '92678486-de9a-478c-8f9b-712229c6c453', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-13 08:07:12.945664+00', ''),
	('00000000-0000-0000-0000-000000000000', '280a50be-922a-47fb-9c54-ba986adf5e10', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-13 08:07:15.491639+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f5c50bf7-ff8b-4b56-9dc4-0f3b990aafff', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-13 08:07:18.574407+00', ''),
	('00000000-0000-0000-0000-000000000000', '3454d5f5-8b18-47cb-9a09-ce0e819552de', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-13 08:08:03.564661+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eeccf442-cecc-4bc0-8e65-a2c6949c5a77', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-13 08:21:10.511332+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd34cb6da-ccaa-41f9-abfa-8fbadef51634', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-15 09:00:21.536769+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c33e6217-b806-4838-acb5-b6ccdefd9457', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 09:00:30.009333+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b4cef373-e05f-4389-a681-3c7db22df9a9', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-15 09:00:32.23715+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f1e05666-9439-4193-b229-72cedd9f357d', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 09:01:09.249863+00', ''),
	('00000000-0000-0000-0000-000000000000', '04259ef8-28c6-4a8f-8d08-1cd328d37602', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-15 09:01:11.165247+00', ''),
	('00000000-0000-0000-0000-000000000000', '47572e70-16b5-4e34-90ff-5cf5c01a91a4', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 09:07:13.01974+00', ''),
	('00000000-0000-0000-0000-000000000000', '44146f78-5353-4d68-adfa-aade96495c06', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-15 09:22:01.505488+00', ''),
	('00000000-0000-0000-0000-000000000000', '71aec9f6-78e8-4b0e-8d36-7ffb8ad3498b', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 09:54:26.520551+00', ''),
	('00000000-0000-0000-0000-000000000000', '31fc9862-8cd1-49ac-905d-8e2e78da9322', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 09:58:51.347248+00', ''),
	('00000000-0000-0000-0000-000000000000', '99858022-afe7-4076-862f-ea47b5cb08c5', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:04:14.426175+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ee5b87ae-df8e-4106-a5aa-f16a41944e2d', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 10:07:13.059218+00', ''),
	('00000000-0000-0000-0000-000000000000', '2403a554-7a04-4a6a-bb08-e184aa801f0f', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:07:18.029149+00', ''),
	('00000000-0000-0000-0000-000000000000', '52d18abd-e673-4e33-833b-fec07cb38f23', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-07-15 10:08:18.956785+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bebd0bed-d8c5-483a-aab2-e04a55937861', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:08:29.812068+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ade7d43a-b91c-4e00-9bf5-61350191b7b0', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 10:08:34.807652+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b96a3dad-97e3-4d70-96b4-38ba1ea7e645', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:08:38.918741+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c9fc7f37-7815-492e-8b55-feac0029704a', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-07-15 10:08:51.945158+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ec3890fb-51ff-4642-a3bb-11bebc224ba0', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:10:25.018987+00', ''),
	('00000000-0000-0000-0000-000000000000', '375f963e-b41d-4f65-bf75-fb39a9bb79f8', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 10:10:29.697393+00', ''),
	('00000000-0000-0000-0000-000000000000', '6124eba5-c38c-4c27-9505-fe7d8ffea8ca', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:10:33.798024+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fba3eb10-91de-4ff8-834a-0f9edc9a671b', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-07-15 10:10:59.492945+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e0b7404-8c9b-4e8a-821b-3202fa81c1f1', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:32:38.638382+00', ''),
	('00000000-0000-0000-0000-000000000000', '1745c084-6339-4a83-b155-477e4fe98493', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 10:32:46.952425+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f6286154-adc6-414f-8c42-bca01e7120ca', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:32:55.578841+00', ''),
	('00000000-0000-0000-0000-000000000000', '8acbc0cd-00f4-40a0-b06b-51b037dc6382', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 10:33:26.052011+00', ''),
	('00000000-0000-0000-0000-000000000000', '1e932a85-4170-467a-acea-e87c1ac96479', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:36:36.180522+00', ''),
	('00000000-0000-0000-0000-000000000000', '2749b391-730f-4ff1-bd21-03ceb916a1d7', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-07-15 10:36:39.563404+00', ''),
	('00000000-0000-0000-0000-000000000000', '562b6ae6-0a3d-44cb-84b8-95f11b1ca831', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:37:04.904933+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a832cf5f-47a6-46d7-8a81-abd1b21e56b1', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 10:37:15.007005+00', ''),
	('00000000-0000-0000-0000-000000000000', '4f220a71-9c18-4b4e-9d3f-210f715786a6', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:37:22.136558+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c92bc032-bede-4671-b148-84d4aaf24674', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-07-15 10:38:09.719755+00', ''),
	('00000000-0000-0000-0000-000000000000', '74800bf4-093d-4e15-b4e6-db2955f091a6', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 10:41:44.381908+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e4d8ebcd-a6a5-41ed-a858-f27aac022cc8', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 10:41:49.563368+00', ''),
	('00000000-0000-0000-0000-000000000000', '38f61248-d590-418a-a221-63de53d55712', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-07-15 10:41:50.424982+00', ''),
	('00000000-0000-0000-0000-000000000000', '34151dfa-f105-4f6b-af6f-50294b6dc64d', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-15 12:15:58.379708+00', ''),
	('00000000-0000-0000-0000-000000000000', '41500150-eac6-4f11-97c4-f08a363b194f', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-15 12:15:58.390037+00', ''),
	('00000000-0000-0000-0000-000000000000', '9a36e5c2-b6a1-4424-bd7a-088b597c7297', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-15 14:14:23.376803+00', ''),
	('00000000-0000-0000-0000-000000000000', '41a04f3a-b09c-4a3d-bf94-5bb660d524b4', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-15 14:14:23.388378+00', ''),
	('00000000-0000-0000-0000-000000000000', '61907795-bca0-4e31-9fc0-84f3a9d47ecd', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-15 14:14:31.590688+00', ''),
	('00000000-0000-0000-0000-000000000000', '35a16597-6dd1-47cf-89e7-93aa4e26e706', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-15 14:14:31.595152+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e94636c8-8304-44f1-b0b8-0113511677ce', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 14:14:38.517583+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f3e0db85-3de7-48dd-9f10-5103613ba273', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-15 14:14:46.331788+00', ''),
	('00000000-0000-0000-0000-000000000000', '745c1598-5e0c-48d1-84f3-6ba07dd7f2b4', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 14:14:52.296673+00', ''),
	('00000000-0000-0000-0000-000000000000', '3cf16dcc-a299-4bd8-8b07-5b7a258a4932', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 14:15:00.279927+00', ''),
	('00000000-0000-0000-0000-000000000000', '4512c79e-d009-44e1-a2a0-939f925b31b0', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-15 14:24:33.86451+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e705c250-6af9-48d9-abc0-37e3850538b2', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 14:24:39.905911+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a6c6c555-fdb2-4828-aecc-fc233105aa1b', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-07-15 14:24:43.71396+00', ''),
	('00000000-0000-0000-0000-000000000000', '79b44eb1-c53b-4c02-82f6-15acbf121a19', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 14:24:47.048464+00', ''),
	('00000000-0000-0000-0000-000000000000', '0ba022fc-238f-4835-a765-eb4fa0fbc2d9', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 14:24:50.684875+00', ''),
	('00000000-0000-0000-0000-000000000000', '878b53aa-b2c6-40a2-a3ba-f31e30c564af', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 14:25:10.559678+00', ''),
	('00000000-0000-0000-0000-000000000000', '0c30aed7-ea46-4dd6-b26a-7c746a6a01a8', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 14:25:24.115784+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a3527219-17df-4144-b764-a1e89f746dca', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-15 14:25:31.214507+00', ''),
	('00000000-0000-0000-0000-000000000000', '733ebc8a-0db5-455a-a3ce-6e3f17280a40', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-15 14:25:36.664091+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f04054ac-ef20-46e2-8564-aa923693a4eb', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-16 08:01:11.13371+00', ''),
	('00000000-0000-0000-0000-000000000000', '34de09e4-f607-443f-b6b5-8985026123a9', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-16 08:01:11.15681+00', ''),
	('00000000-0000-0000-0000-000000000000', '27378db7-b623-4310-a11a-6e0d966165a6', '{"action":"user_updated_password","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-16 08:51:17.906915+00', ''),
	('00000000-0000-0000-0000-000000000000', '6fde4bb0-63ed-453a-a77a-0b29bc3d9d67', '{"action":"user_modified","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-16 08:51:17.918676+00', ''),
	('00000000-0000-0000-0000-000000000000', '3ae9389a-d181-431c-bc3f-773d78c46ac2', '{"action":"logout","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-16 08:51:41.618886+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b91342e-f7f4-4171-9956-4c88bf90e39f', '{"action":"user_recovery_requested","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-07-16 09:58:46.45684+00', ''),
	('00000000-0000-0000-0000-000000000000', '9046216d-d47a-41b3-b92c-6cc318a439f6', '{"action":"login","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-07-16 09:59:09.960545+00', ''),
	('00000000-0000-0000-0000-000000000000', '172fd479-2e26-44ad-8c22-c9183a4b6b06', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-16 12:01:39.59198+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ed03fa04-27a2-4183-8665-25411828be19', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-16 12:01:39.605977+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f6e6f059-b7ea-4782-bca3-9bc3faf92c7c', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-16 13:33:51.056303+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b49906e3-8d26-498d-9ed4-161359c22b0c', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-16 13:33:51.071438+00', ''),
	('00000000-0000-0000-0000-000000000000', '660a3e40-7cfe-40cf-8f7b-c3bbb666b396', '{"action":"token_refreshed","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-16 14:40:19.616576+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd744b32c-097e-4269-b4dc-728d7133feed', '{"action":"token_revoked","actor_id":"0dcc1802-d0db-426f-b95d-76327e091600","actor_username":"saifsweelam@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-07-16 14:40:19.634024+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('47065191-65ef-4067-bfa3-a4f56cf494c9', '0dcc1802-d0db-426f-b95d-76327e091600', '9e5621fc-9cc3-4df0-b70c-4d4894355cff', 's256', 'rg5ZX5Oi04vDtWxidETLpcjODAuz81PEL7FLO4Dtu6c', 'magiclink', '', '', '2025-07-15 09:58:51.292576+00', '2025-07-15 10:04:14.455395+00', 'magiclink', '2025-07-15 10:04:14.455272+00'),
	('3cd9c67e-c544-4ac1-8602-ce808e579af7', '0dcc1802-d0db-426f-b95d-76327e091600', '0946b35a-4de9-4994-a8ca-a88f30785415', 's256', '78X1qiv07YwtxRG2tWv2ThkouYhJ3BNgf6nKPhKw8uc', 'magiclink', '', '', '2025-07-15 10:32:46.932862+00', '2025-07-15 10:32:55.609044+00', 'magiclink', '2025-07-15 10:32:55.60895+00');


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '0dcc1802-d0db-426f-b95d-76327e091600', 'authenticated', 'authenticated', 'saifsweelam@gmail.com', '$2a$10$reWziMhKCn7SZDO0masKTeEXBtFrxTSmSziG6Vd6CYO5dfU0ErZwy', '2025-07-10 08:20:37.895046+00', NULL, '', NULL, '', '2025-07-16 09:58:46.445958+00', '', '', NULL, '2025-07-16 09:59:09.982405+00', '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-07-10 08:20:37.873306+00', '2025-07-16 14:40:19.661095+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('0dcc1802-d0db-426f-b95d-76327e091600', '0dcc1802-d0db-426f-b95d-76327e091600', '{"sub": "0dcc1802-d0db-426f-b95d-76327e091600", "email": "saifsweelam@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2025-07-10 08:20:37.886042+00', '2025-07-10 08:20:37.886133+00', '2025-07-10 08:20:37.886133+00', '1acba002-df2f-426d-8454-ab40a8e85e8a');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('b5224d56-5ebe-49d3-86af-f51fb73d5842', '0dcc1802-d0db-426f-b95d-76327e091600', '2025-07-16 09:59:09.98535+00', '2025-07-16 14:40:19.671701+00', NULL, 'aal1', NULL, '2025-07-16 14:40:19.671611', 'Next.js Middleware', '172.19.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('b5224d56-5ebe-49d3-86af-f51fb73d5842', '2025-07-16 09:59:10.047751+00', '2025-07-16 09:59:10.047751+00', 'otp', 'b0f08eaf-eaf5-465f-9dee-28db10978b17');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 56, 'dmaix3hgbban', '0dcc1802-d0db-426f-b95d-76327e091600', true, '2025-07-16 09:59:10.015087+00', '2025-07-16 12:01:39.606988+00', NULL, 'b5224d56-5ebe-49d3-86af-f51fb73d5842'),
	('00000000-0000-0000-0000-000000000000', 57, 'lzsdat4g34vx', '0dcc1802-d0db-426f-b95d-76327e091600', true, '2025-07-16 12:01:39.616908+00', '2025-07-16 13:33:51.072788+00', 'dmaix3hgbban', 'b5224d56-5ebe-49d3-86af-f51fb73d5842'),
	('00000000-0000-0000-0000-000000000000', 58, '6jxtrljtmg36', '0dcc1802-d0db-426f-b95d-76327e091600', true, '2025-07-16 13:33:51.083067+00', '2025-07-16 14:40:19.636014+00', 'lzsdat4g34vx', 'b5224d56-5ebe-49d3-86af-f51fb73d5842'),
	('00000000-0000-0000-0000-000000000000', 59, 'pkpqzzzenwv2', '0dcc1802-d0db-426f-b95d-76327e091600', false, '2025-07-16 14:40:19.648809+00', '2025-07-16 14:40:19.648809+00', '6jxtrljtmg36', 'b5224d56-5ebe-49d3-86af-f51fb73d5842');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "full_name", "created_at", "user_id") VALUES
	(1, 'Seif El-Din Sweilam', '2025-07-17 09:19:34.148984+00', '0dcc1802-d0db-426f-b95d-76327e091600');


--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "name", "domain", "created_at") VALUES
	('packt', 'Packt Publishing', 'packt.local', '2025-07-17 07:43:54.344904+00'),
	('activenode', 'Activenode Education', 'activenode.learn', '2025-07-17 07:44:41.012224+00'),
	('oddmonkey', 'OddMonkey Inc', 'oddmonkey.inc', '2025-07-17 07:45:22.103615+00');


--
-- Data for Name: tenant_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenant_permission" ("id", "profile_id", "tenant_id", "created_at") VALUES
	(1, 1, 'packt', '2025-07-17 09:34:15.369014+00'),
	(2, 1, 'oddmonkey', '2025-07-17 09:34:30.679216+00');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 59, true);


--
-- Name: profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."profiles_id_seq"', 1, true);


--
-- Name: tenant_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tenant_permission_id_seq"', 2, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
