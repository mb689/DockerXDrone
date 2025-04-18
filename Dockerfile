# Dockerfile

# 1. Use an official Python base image
FROM python:3.10-slim

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy your app code into the container
COPY . .

# 4. Install any required packages
RUN pip install --no-cache-dir -r requirements.txt

# 5. Set the default command to run your app
CMD ["python", "main.py"]
