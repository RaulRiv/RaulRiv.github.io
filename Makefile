.PHONY: help install dev build generate preview typecheck

help:           ## Muestra esta ayuda
	@grep -E '^[a-zA-Z_-]+:.*##' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*##"}; {printf "  %-15s %s\n", $$1, $$2}'

install:        ## Instala dependencias Node
	npm install

dev:            ## Arranca el servidor de desarrollo
	bash scripts/dev.sh

build:          ## Build de producción (SSR)
	npm run build

generate:       ## Genera sitio estático
	npm run generate

preview:        ## Preview del sitio generado
	npm run preview

typecheck:      ## Type checking con Nuxt
	npm run typecheck
