from demo_client.paths.pet.put import ApiForput
from demo_client.paths.pet.post import ApiForpost


class Pet(
    ApiForput,
    ApiForpost,
):
    pass
