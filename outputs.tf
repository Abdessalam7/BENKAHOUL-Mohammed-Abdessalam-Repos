# outputs.tf

output "pysmoke_vault_role_name" {
  description = "Nom du rôle Vault (auth Kubernetes) pour pysmoke"
  value       = vault_kubernetes_auth_backend_role.pysmoke.role_name
}

output "pysmoke_vault_policy_name" {
  description = "Nom de la policy Vault associée à pysmoke"
  value       = vault_policy.pysmoke_read.name
}
