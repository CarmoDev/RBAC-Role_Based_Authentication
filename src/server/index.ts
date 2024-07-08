import express from 'express';

import { routeAdapter } from './adapters/routeAdapter';
import { makeSignUpController } from '../factories/signUp/makeSignUpController';
import { makeSignInController } from '../factories/signIn/makeSignInController';
import { makeListLeadsController } from '../factories/makeListLeadsController';
import { makeAuthenticationMiddleware } from '../factories/makeAuthenticationMiddleware';
import { middlewareAdapter } from './adapters/middlewareAdapter';
import { makeAuthorizationMiddleware } from '../factories/makeAuthorizationMiddleware';
import { makeCreateRoleController } from '../factories/role/makeCreateRoleController';
import { makeListRoleController } from '../factories/role/makeListRoleController';
import { makeCreatePermissionController } from '../factories/Permission/makeCreatePermissionController';
import { makeListPermissionController } from '../factories/Permission/makeListPermissionController';
import { makeCreateRolePermissionController } from '../factories/RolePermission/makeCreateRolePermissionController';
import { makeListRolePermissionController } from '../factories/RolePermission/makeListRolePermissionController';

const app = express();

app.use(express.json());

app.post('/sign-up', routeAdapter(makeSignUpController()));
app.post('/sign-in', routeAdapter(makeSignInController()));

app.post('/role',
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(['roles:write'])),
  routeAdapter(makeCreateRoleController())
);

app.get('/role',
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(['roles:read', 'roles:write'])),
  routeAdapter(makeListRoleController())
);

app.post('/permission',
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(['permissions:write'])),
  routeAdapter(makeCreatePermissionController())
);

app.get('/permissions',
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(['permissions:read','permissions:write'])),
  routeAdapter(makeListPermissionController())
);

app.post('/role-permission',
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(['rolePermission:write'])),
  routeAdapter(makeCreateRolePermissionController())
);

app.get('/role-permission',
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(['rolePermission:read', 'rolePermission:write'])),
  routeAdapter(makeListRolePermissionController())
);

app.get('/leads',
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(['leads:read'])),
  routeAdapter(makeListLeadsController())
);

app.post('/leads',
  middlewareAdapter(makeAuthenticationMiddleware()),
  middlewareAdapter(makeAuthorizationMiddleware(['leads:write'])),
  async (req, res) => res.json({created: true})
);

app.listen(3001, () => {
  console.log('Server started at http://localhost:3001');
});
