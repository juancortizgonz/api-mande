CREATE DATABASE mande
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    TEMPLATE template0;

\c mande

CREATE TABLE IF NOT EXISTS public."Usuario"
(
    id_usuario integer NOT NULL DEFAULT 'nextval('"Usuario_id_usuario_seq"'::regclass)',
    nombre character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    telefono character varying COLLATE pg_catalog."default" NOT NULL,
    psw character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario)
)

TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."Cliente"
(
    id_cliente integer NOT NULL DEFAULT 'nextval('"Cliente_id_cliente_seq"'::regclass)',
    recibo character varying COLLATE pg_catalog."default" NOT NULL,
    lat_dir character varying COLLATE pg_catalog."default" NOT NULL,
    lon_dir character varying COLLATE pg_catalog."default" NOT NULL,
    id_usuario integer,
    CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente),
    CONSTRAINT cliente_usuario_fkey FOREIGN KEY (id_usuario)
        REFERENCES public."Usuario" (id_usuario) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."Trabajador"
(
    id_trabajador integer NOT NULL DEFAULT 'nextval('"Trabajador_id_trabajador_seq"'::regclass)',
    foto character varying COLLATE pg_catalog."default" NOT NULL,
    cedula character varying COLLATE pg_catalog."default" NOT NULL,
    soporte_cedula character varying COLLATE pg_catalog."default" NOT NULL,
    lat_dir character varying COLLATE pg_catalog."default" NOT NULL,
    lon_dir character varying COLLATE pg_catalog."default" NOT NULL,
    id_usuario integer NOT NULL,
    CONSTRAINT trabajador_pkey PRIMARY KEY (id_trabajador),
    CONSTRAINT trabajador_usuario_fkey FOREIGN KEY (id_usuario)
        REFERENCES public."Usuario" (id_usuario) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."Labor"
(
    id_labor integer NOT NULL DEFAULT 'nextval('"Labor_id_labor_seq"'::regclass)',
    nombre character varying COLLATE pg_catalog."default" NOT NULL,
    descripcion character varying COLLATE pg_catalog."default" NOT NULL,
    unidad character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT labor_pkey PRIMARY KEY (id_labor)
)

TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."Tarifa"
(
    id_tarifa integer NOT NULL DEFAULT 'nextval('"Tarifa_id_tarifa_seq"'::regclass)',
    precio integer NOT NULL,
    id_trabajador integer,
    id_labor integer,
    CONSTRAINT tarifa_pkey PRIMARY KEY (id_tarifa),
    CONSTRAINT tarifa_labor_fkey FOREIGN KEY (id_labor)
        REFERENCES public."Labor" (id_labor) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT tarifa_trabajador_fkey FOREIGN KEY (id_trabajador)
        REFERENCES public."Trabajador" (id_trabajador) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."Oferta"
(
    id_oferta integer NOT NULL DEFAULT 'nextval('"Oferta_id_oferta_seq"'::regclass)',
    id_trabajador integer,
    id_labor integer,
    id_tarifa integer,
    CONSTRAINT oferta_pkey PRIMARY KEY (id_oferta),
    CONSTRAINT oferta_labor_fkey FOREIGN KEY (id_labor)
        REFERENCES public."Labor" (id_labor) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT oferta_tarifa_fkey FOREIGN KEY (id_tarifa)
        REFERENCES public."Tarifa" (id_tarifa) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT oferta_trabajador_fkey FOREIGN KEY (id_trabajador)
        REFERENCES public."Trabajador" (id_trabajador) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."Servicio"
(
    id_servicio integer NOT NULL DEFAULT 'nextval('"Servicio_id_servicio_seq"'::regclass)',
    costo character varying COLLATE pg_catalog."default" NOT NULL,
    calificacion integer NOT NULL,
    fecha date NOT NULL,
    pagada boolean NOT NULL DEFAULT 'false',
    id_oferta integer,
    CONSTRAINT servicio_pkey PRIMARY KEY (id_servicio),
    CONSTRAINT servicio_oferta_fkey FOREIGN KEY (id_oferta)
        REFERENCES public."Oferta" (id_oferta) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."Metodo_Pago"
(
    id_metodo_pago integer NOT NULL DEFAULT 'nextval('"Metodo_Pago_id_metodo_pago_seq"'::regclass)',
    tipo_tarjeta integer NOT NULL,
    numero_tarjeta character varying COLLATE pg_catalog."default" NOT NULL,
    id_cliente integer,
    CONSTRAINT metodo_pago_pkey PRIMARY KEY (id_metodo_pago),
    CONSTRAINT metodo_pago_cliente_fkey FOREIGN KEY (id_cliente)
        REFERENCES public."Cliente" (id_cliente) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

TABLESPACE pg_default;

CREATE OR REPLACE VIEW public.display_clientes
 AS
 SELECT "Cliente".id_usuario,
    "Usuario".nombre,
    "Usuario".email,
    "Usuario".telefono
   FROM "Cliente"
     JOIN "Usuario" ON "Usuario".id_usuario = "Cliente".id_usuario;
     
CREATE OR REPLACE VIEW public.display_trabajadores
 AS
 SELECT "Trabajador".id_usuario,
    "Usuario".nombre,
    "Usuario".email,
    "Usuario".telefono
   FROM "Trabajador"
     JOIN "Usuario" ON "Usuario".id_usuario = "Trabajador".id_usuario;

CREATE INDEX servicios_pagados ON "Servicio"(pagada) WHERE pagada=true;

CREATE INDEX index_usuario_email ON "Usuario"(email);

CREATE INDEX index_cliente_idusuario ON "Cliente"(id_usuario);

CREATE INDEX index_trabajador_idusuario ON "Trabajador"(id_usuario);
