variable "vault_addr" {
  description = "URL du serveur Vault (ex: https://vault.example.com)"
  type        = string
}

variable "vault_kubernetes_auth_path" {
  description = "Chemin du backend d'auth Kubernetes dans Vault"
  type        = string
  default     = "kubernetes"
}

variable "kv_mount_path" {
  description = "Chemin du secrets engine KV v2 pour les secrets applicatifs"
  type        = string
  default     = "secret"
}

variable "pysmoke_namespace" {
  description = "Namespace Kubernetes où tourne l'application pysmoke"
  type        = string
  default     = "pysmoke"
}

variable "pysmoke_service_account_name" {
  description = "ServiceAccount utilisé par les pods pysmoke"
  type        = string
  default     = "pysmoke-sa"
}

variable "pysmoke_role_name" {
  description = "Nom du rôle Vault (auth Kubernetes) pour pysmoke"
  type        = string
  default     = "pysmoke-role"
}

# Variables optionnelles, utilisées seulement si tu veux gérer la config du backend k8s ici
variable "kubernetes_api_url" {
  description = "URL de l'API Kubernetes (si tu gères la config d'auth Vault ici)"
  type        = string
  default     = ""
}

variable "kubernetes_ca_cert_path" {
  description = "Chemin vers le fichier PEM du CA Kubernetes (si géré ici)"
  type        = string
  default     = ""
}
