#!/bin/bash

# Check if xclip or pbcopy is installed
if ! command -v pbcopy &> /dev/null && ! command -v xclip &> /dev/null
then
    echo "Please install pbcopy (macOS) or xclip (Linux) to use this script."
    exit 1
fi

# Function to copy to clipboard
copy_to_clipboard() {
    if command -v pbcopy &> /dev/null; then
        echo "$1" | pbcopy
    elif command -v xclip &> /dev/null; then
        echo "$1" | xclip -selection clipboard
    fi
}

# Get the recipient's name and company as input
read -p "Enter the recipient's name: " recipient_name
read -p "Enter the recipient's company: " recipient_company

# Define the subject
subject="Quick Chat About Supplier Discovery Challenges in Semiconductor Manufacturing"

# Define the message body template
message_body="Hi $recipient_name,

I hope you're doing well. My name is Dylan, and I'm currently working on a new company focused on solving the challenges of supplier discovery for professionals in the semiconductor manufacturing industry.

I came across your profile and was impressed by your experience in sourcing. Your expertise really stands out, and I believe your insights could be invaluable in shaping our solution.

I'm reaching out because I'd love to hear about the specific challenges you encounter in the supplier discovery process at $recipient_company. Your feedback will be invaluable in developing a solution that meets the needs of professionals like you.

To show my appreciation for your time, I'd like to offer you a \$5 Starbucks gift card for a brief, 30-minute user interview.

You can schedule a time that works best for you using my Calendly link: https://calendly.com/dylan-konfig/meet. If you prefer, you can share your availability and email, and I'll send you a calendar invite.

Thanks so much for considering my request. Your insights will be instrumental in creating a solution that truly addresses the challenges you face in your field.

Best regards,"

# Copy the subject to the clipboard
copy_to_clipboard "$subject"

# Output the subject to the terminal
echo -e "\nSubject copied to clipboard:\n$subject"

# Wait for the user to press enter
read -p "Press Enter to copy the body of the message to the clipboard..."

# Copy the message body to the clipboard
copy_to_clipboard "$message_body"

# Output the message body to the terminal
echo -e "\nMessage body generated and copied to clipboard:\n$message_body"
