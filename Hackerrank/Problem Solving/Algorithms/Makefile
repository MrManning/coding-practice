root := ../../../

.PHONY: challenge
challenge: ## Create new challenge dir
ifndef NAME
	$(error NAME is undefined)
endif
ifndef LANGUAGE
	$(error LANGUAGE is undefined)
endif
	$(root)scripts/create-challenge.sh "$(NAME)" $(LANGUAGE) $(URL)

.PHONY: help
help: ## Display this help screen
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'