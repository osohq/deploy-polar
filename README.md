# Deploy polar code to Oso Cloud

## Summary

GitHub Action that uses the [Oso Cloud](https://www.osohq.com/)
[CLI](https://www.osohq.com/docs/reference/client-apis/cli)
to deploy all [polar](https://www.osohq.com/docs/tutorials/quickstart)
code in the current repository to the Oso Cloud environment
referenced by the `OSO_AUTH` environment variable in the action config.

Currently searches for all `.polar` files that are not symlinks,
in order to prevent errors caused by duplicating syntax.

All `.polar` files that compose the policy must be deployed together,
because rules in one polar file may refer to entities that are
defined in another.

The Oso Cloud CLI must be installed on the runner before using this action.
Use the setup-oso-cloud action to do this.

## Environment Variables

__OSO_AUTH__:  API Key for the Oso Cloud environment to deploy to.
Must be a read-write key. Should be stored as a secret.
The environment's policy code __will__ be overwritten.

```bash

env:
  OSO_AUTH: ${{ secrets.YOUR_OSO_CLOUD_API_KEY_SECRET_NAME }}

```

## Inputs

none

## Outputs

none
