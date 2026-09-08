class Category:

    def __init__(self,name):
        self.name = name 
        self.ledger = []
    
    def deposit(self,deposit_amount,deposit_description=""):

        # Append the history to ledger 
        self.ledger.append({'amount':deposit_amount,'description':deposit_description})
        
    def withdraw(self,withdraw_amount,withdraw_description=""):

        # Check if the current amount is greater than the withdraw amount requested 
        if self.check_funds(withdraw_amount):
            self.ledger.append({'amount':-(withdraw_amount),'description':withdraw_description})
            return True
        else:
            return False
        
    def get_balance(self):
        total_amount = 0
        
        # Looping through the ledger list to calculate the amount 
        for history in self.ledger:
            total_amount += history['amount']

        return total_amount

    def check_funds(self,withdraw_amount):
        # Calculate total amount present as of now from the transaction history 
        total_amount = 0
        for history in self.ledger:
            total_amount += history['amount']

        # Compare IF there is enough money to withdraw as requested from user 
        if total_amount >= withdraw_amount : 
            return True
        else:
            return False
    
    def transfer(self, transfer_amount, category):
        if self.check_funds(transfer_amount):
            self.withdraw(transfer_amount, f"Transfer to {category.name}")
            category.deposit(transfer_amount, f"Transfer from {self.name}")
            return True
        else:
            return False
    def __str__(self):
        output = self.name.center(30, "*") + "\n"

        for transaction in self.ledger:
            description = transaction["description"][:23]
            amount = f"{transaction['amount']:.2f}"

            output += f"{description:<23}{amount:>7}\n"

        output += f"Total: {self.get_balance():.2f}"

        return output

def create_spend_chart(categories):
    # Calculate total spent in each category
    spent = []

    for category in categories:
        total = 0
        for transaction in category.ledger:
            if transaction["amount"] < 0:
                total += abs(transaction["amount"])
        spent.append(total)

    total_spent = sum(spent)

    # Round percentages down to nearest 10
    percentages = []
    for amount in spent:
        percentage = int((amount / total_spent) * 100)
        percentages.append((percentage // 10) * 10)

    # Build chart
    output = "Percentage spent by category\n"

    for percent in range(100, -10, -10):
        output += str(percent).rjust(3) + "| "
        for p in percentages:
            if p >= percent:
                output += "o  "
            else:
                output += "   "
        output += "\n"

    # Horizontal line
    output += "    " + "-" * (len(categories) * 3 + 1) + "\n"

    # Longest category name
    longest = max(len(category.name) for category in categories)

    # Print names vertically
    for i in range(longest):
        output += "     "
        for category in categories:
            if i < len(category.name):
                output += category.name[i] + "  "
            else:
                output += "   "
        output += "\n"

    return output.rstrip("\n")