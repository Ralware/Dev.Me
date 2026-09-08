racers = [
    {'name': 'Peach',  'items': ['green shell', 'banana', 'green shell'], 'finish': 3},
    {'name': 'Bowser', 'items': ['green shell'], 'finish': 1},
    # Sometimes the racer's name wasn't recorded
    {'name': None,     'items': ['mushroom'], 'finish': 2},
    {'name': 'Toad',   'items': ['green shell', 'mushroom'], 'finish': 1},
]

# Fix me!
def best_items(racers):
    winner_item_counts = {}

    for i in range(len(racers)):
        # The i'th racer dictionary
        racer = racers[i]

        # We're only interested in racers who finished in first
        if racer['finish'] == 1:
            for i in racer['items']:
                # Add one to the count for this item (adding it to the dict if necessary)
                if i not in winner_item_counts:
                    winner_item_counts[i] = 0
                winner_item_counts[i] += 1

        # Data quality issues :/ Print a warning about racers with no name set.
        if racer['name'] is None:
            print(
                "WARNING: Encountered racer with unknown name on iteration {}/{} (racer = {})".format(
                    i + 1, len(racers), racer['name']
                )
            )

    return winner_item_counts


print(best_items(racers))

