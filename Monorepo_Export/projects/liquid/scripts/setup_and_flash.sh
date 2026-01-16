#!/bin/bash
set -e

# 0. Check for prerequisites
if ! command -v curl &> /dev/null; then
    echo "Error: 'curl' is required but not found. Please install it (e.g., 'sudo apt install curl')."
    exit 1
fi

# 1. Install Google Cloud SDK if not present
if ! command -v gcloud &> /dev/null; then
    echo ">>> gcloud CLI not found. Downloading and installing..."
    
    # Create a temporary directory for download
    mkdir -p tmp_gcloud_install
    cd tmp_gcloud_install

    # Download generic Linux archive (x86_64)
    curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-cli-linux-x86_64.tar.gz
    
    # Extract
    tar -xf google-cloud-cli-linux-x86_64.tar.gz
    
    # Run install script
    # --quiet: disable prompts
    # --path-update: update PATH in rc files
    ./google-cloud-sdk/install.sh --quiet --path-update true
    
    # Source the path for the current session
    source ./google-cloud-sdk/path.bash.inc
    
    cd ..
    rm -rf tmp_gcloud_install
    echo ">>> gcloud installed successfully."
else
    echo ">>> gcloud is already installed."
fi

# 2. Authentication
echo ">>> Checking authentication..."
if ! gcloud auth print-access-token &> /dev/null; then
    echo "Please log in to Google Cloud:"
    gcloud auth login
fi

# 3. Configuration
echo -n "Enter your Google Cloud Project ID: "
read PROJECT_ID

LOCATION="us-central1"

# 4. Call Gemini 1.5 Flash API
echo ">>> Calling Gemini 1.5 Flash model..."
curl -X POST \
    -H "Authorization: Bearer $(gcloud auth print-access-token)" \
    -H "Content-Type: application/json" \
    "https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/publishers/google/models/gemini-1.5-flash:generateContent" \
    -d '{
      "contents": {
        "role": "user",
        "parts": [
          {"text": "Hello! Please write a haiku about software engineering."}
        ]
      }
    }'