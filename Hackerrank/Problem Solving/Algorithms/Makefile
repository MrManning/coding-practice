root := ../../../

.PHONY: challenge
challenge: ## Create new challenge dir
ifndef NAME
	$(error name is undefined)
endif
ifndef LANGUAGE
	$(error language is undefined)
endif
	$(root)scripts/create-challenge.sh "$(NAME)" $(LANGUAGE)

.PHONY: help
help: ## Display this help screen
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'