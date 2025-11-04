######################################
# AUTHENTIFICATION GITLAB → VAULT
# Permet aux pipelines GitLab CI de s'authentifier sans token statique
######################################

# 1️⃣ Activer (si non déjà activé) le backend d'auth JWT pour GitLab
resource "vault_auth_backend" "gitlab_jwt" {
  type = "jwt"
  path = "gitlab"
}

# 2️⃣ Configurer la connexion OIDC pour GitLab.com
resource "vault_jwt_auth_backend_config" "gitlab_jwt_config" {
  backend             = vault_auth_backend.gitlab_jwt.path
  oidc_discovery_url  = "https://gitlab.com"
  bound_issuer        = "https://gitlab.com"
}

# 3️⃣ Créer un rôle JWT spécifique pour les pipelines GitLab du projet pysmoke
resource "vault_jwt_auth_backend_role" "pysmoke_gitlab" {
  backend   = vault_auth_backend.gitlab_jwt.path
  role_name = "pysmoke_gitlab"

  # Claim que GitLab envoie automatiquement dans son JWT
  # (project_path = <groupe>/<projet>)
  bound_claims = {
    "project_path" = "mygroup/pysmoke"
    "ref"          = "main"
  }

  user_claim = "user_email"

  # Policy(s) appliquée(s) au token temporaire généré
  token_policies = [
    vault_policy.pysmoke_read.name
  ]

  token_ttl     = 3600   # 1h
  token_max_ttl = 14400  # 4h
}
