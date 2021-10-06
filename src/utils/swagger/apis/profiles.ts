/**
 * GET method route
 * @example http://localhost:PORT/v1/profiles
 *
 * @swagger
 * /v1/profiles:
 *   get:
 *     description: Get all stored profiles in Database
 *     tags: ["profiles"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of profiles
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/profiles'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
/**
 * POST method route
 * @example http://localhost:PORT/v1/profiles
 *
 * @swagger
 * /v1/profiles:
 *   post:
 *      description: Create new User
 *      tags: ["profiles"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: user creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/profileschema'
 *            example:
 *              name: userName
 *              email: test.user@mail.com
 *      responses:
 *        201:
 *          description: return created user
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/profileschema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
/**
 * GET method route
 * @example http://localhost:PORT/v1/profiles/:id
 *
 * @swagger
 * /v1/profiles/{id}:
 *  get:
 *    description: Get user by userId
 *    tags: ["profiles"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique userId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return user by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/profileschema'
 */
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/profiles/:id
 *
 * @swagger
 * /v1/profiles/{id}:
 *  delete:
 *    description: Delete user by userId
 *    tags: ["profiles"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique userId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted user
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/profileschema'
 */
