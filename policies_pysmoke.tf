# policies_pysmoke.tf

locals {
  pysmoke_kv_data_path     = "${var.kv_mount_path}/data/pysmoke/*"
  pysmoke_kv_metadata_path = "${var.kv_mount_path}/metadata/pysmoke/*"
}

resource "vault_policy" "pysmoke_read" {
  name = "pysmoke-read"

  policy = <<EOT
# Lecture et liste des secrets sous <kv_mount_path>/data/pysmoke/*
path "${local.pysmoke_kv_data_path}" {
  capabilities = ["read", "list"]
}

# Liste des clés (nécessaire pour certains outils, ex: ExternalSecrets)
path "${local.pysmoke_kv_metadata_path}" {
  capabilities = ["list"]
}
EOT
}
