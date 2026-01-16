# Contributing to Blackstone

Thank you for your interest in contributing! To ensure a smooth and collaborative process, please follow these guidelines.

## Pull Request (PR) Process

1.  **Create a Branch**: All work must be done in a feature branch, not directly on `main`.
    -   Branch from the latest `main`.
    -   Use a descriptive name, like `feat/add-user-login` or `fix/header-layout-bug`.

2.  **Develop**: Make your code changes. Remember that our pre-commit hooks will automatically format and lint your code.

3.  **Commit Changes**: Follow the Conventional Commits specification for your commit messages. This is crucial for automated versioning and changelog generation.

4.  **Push and Open a PR**: Push your branch to the remote repository and open a Pull Request against the `main` branch.
    -   Provide a clear title and a detailed description of the changes.
    -   Link to any relevant issues or tickets.

5.  **Code Review**: At least one other developer must review and approve the PR before it can be merged.

6.  **Visual Regression Checks**: For any changes within `packages/ui`, a Chromatic check will run. Review the posted link to ensure all visual changes are intentional. The PR cannot be merged if there are unapproved visual differences.

---

## Commit Message Convention

We use the Conventional Commits standard. The format is:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types

-   **feat**: A new feature for the user.
-   **fix**: A bug fix for the user.
-   **chore**: Routine tasks, maintenance, or dependency updates.
-   **docs**: Documentation changes only.
-   **style**: Code style changes (formatting, etc.) that do not affect the meaning of the code.
-   **refactor**: A code change that neither fixes a bug nor adds a feature.
-   **perf**: A code change that improves performance.
-   **test**: Adding missing tests or correcting existing tests.

**Example:**

```
feat(auth): add password reset functionality
```