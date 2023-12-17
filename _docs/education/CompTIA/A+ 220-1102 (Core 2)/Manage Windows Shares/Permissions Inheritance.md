# Permissions Inheritance

when a subfolder has been created under a folder which has permissions applied, then that folder will directly inherit it's parent folder permissois.

For folders that are moved from one directory to another they will also inherit their parent folder's permissions, however windows will directly prompt if you want to do this, or if you want to keep the current user's permissions. By doing this you may run into permissions issues, still, and need to modify the directories up stream for anyone whom originally had access to the folder.

