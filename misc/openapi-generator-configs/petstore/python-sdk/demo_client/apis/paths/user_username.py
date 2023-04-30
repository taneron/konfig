from demo_client.paths.user_username.get import ApiForget
from demo_client.paths.user_username.put import ApiForput
from demo_client.paths.user_username.delete import ApiFordelete


class UserUsername(
    ApiForget,
    ApiForput,
    ApiFordelete,
):
    pass
