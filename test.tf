resource "vault_jwt_auth_backend_role" "pysmoke-helm-ci" {
  provider               = vault.environment
  backend                = "gitlab_ci_oidc"
  role_name              = "pysmoke-helm-ci"
  token_policies         = ["pysmoke-helm-ci"]
  token_explicit_max_ttl = 3600
  bound_audiences        = ["https://vault-aud.echonet.net.intra"]
  bound_claims = {
    project_path = format("market-place/%s/pysmoke-helm", var.vault_env)
  }
  user_claim = "user_email"
  role_type  = "jwt"
}

resource "vault_policy" "pysmoke-helm-ci" {
  provider = vault.environment
  name     = "pysmoke-helm-ci"
  policy = <<EOT
path "pkis/pysmoke/ca/pem" {
  capabilities = ["read"]
}
path "auth/cert/certs/*" {
  capabilities = ["create"]
}
path "secret/data/pysmoke/*" {
  capabilities = ["create", "read", "update"]
}
path "secret/metadata/pysmoke/*" {
  capabilities = ["list"]
}
path "ibmcloud/data/*" {
  capabilities = ["read"]
}
path "ibmcloud/metadata/*" {
  capabilities = ["list"]
}
EOT
}

resource "vault_policy" "pysmoke-read" {
  provider = vault.environment
  name     = "pysmoke-read"
  policy = <<EOT
path "secret/data/pysmoke/*" {
  capabilities = ["read"]
}
path "secret/metadata/pysmoke/*" {
  capabilities = ["list"]
}
EOT
}

resource "vault_kubernetes_auth_backend_role" "pysmoke-runtime" {
  provider                         = vault.environment
  backend                          = "kubernetes-iks-ap43877-hprd-57b7a818"
  role_name                        = "pysmoke-runtime"
  bound_service_account_names      = ["pysmoke-sa"]
  bound_service_account_namespaces = ["ap43590"]
  token_policies                   = ["pysmoke-read"]
  token_ttl                        = 3600
}
