# roles_pysmoke.tf

resource "vault_kubernetes_auth_backend_role" "pysmoke" {
  backend   = var.vault_kubernetes_auth_path
  role_name = var.pysmoke_role_name

  # Qui peut utiliser ce rôle côté Kubernetes ?
  bound_service_account_names      = [var.pysmoke_service_account_name]
  bound_service_account_namespaces = [var.pysmoke_namespace]

  # Quelles policies sont attachées au token Vault généré ?
  token_policies = [
    vault_policy.pysmoke_read.name,
  ]

  token_ttl     = "1h"
  token_max_ttl = "4h"
}
