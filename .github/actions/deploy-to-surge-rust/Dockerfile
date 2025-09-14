# Use the official Rust image as base for building
FROM rust:1 AS builder

# Install build dependencies
# RUN apk add --no-cache musl-dev

# Set working directory
WORKDIR /app

# Copy manifest files
COPY Cargo.toml Cargo.lock ./

# Copy source code
COPY src ./src

# Build the application in release mode
RUN cargo build --release

# Runtime stage - use a minimal Alpine image
FROM alpine:latest AS runtime

# Install necessary runtime dependencies
RUN apk add --no-cache ca-certificates

# Create a non-root user
RUN addgroup -g 1000 appuser && \
    adduser -D -s /bin/sh -u 1000 -G appuser appuser

# Set working directory
WORKDIR /app

# Copy the binary from builder stage
COPY --from=builder /app/target/release/rust_shell_example /app/

# Change ownership to appuser
RUN chown appuser:appuser /app/rust_shell_example

# Switch to non-root user
USER appuser

# Set default environment variable
ENV NAME=Docker

# Run the application
CMD ["./rust_shell_example"]
