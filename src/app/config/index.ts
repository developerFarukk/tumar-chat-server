import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
    node_env: process.env.NODE_ENV,
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,

    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,

    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,

    client_url: process.env.CLIENT_URL,

    resend_api_key: process.env.RESEND_API_KEY,

    email_from: process.env.EMAIL_FROM,
    email_from_name: process.env.EMAIL_FROM_NAME,

    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,

    arcjet_api_key: process.env.ARCJET_API_KEY,
    arcjet_environment: process.env.ARCJET_ENVIRONMENT,

}

// import dotenv from 'dotenv'

// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config()
// }

// function requiredEnv(key: string): string {
//   const value = process.env[key]
//   if (!value) {
//     throw new Error(`❌ Missing required env variable: ${key}`)
//   }
//   return value
// }

// export default {
//   // Core
//   node_env: process.env.NODE_ENV,
//   port: requiredEnv('PORT'),

//   // Database
//   mongodb_url: requiredEnv('MONGODB_URI'),

//   // Auth / Security
//   bcrypt_salt_rounds: requiredEnv('BCRYPT_SALT_ROUNDS'),

//   jwt_access_secret: requiredEnv('JWT_ACCESS_SECRET'),
//   jwt_refresh_secret: requiredEnv('JWT_REFRESH_SECRET'),
//   jwt_access_expires_in: requiredEnv('JWT_ACCESS_EXPIRES_IN'),
//   jwt_refresh_expires_in: requiredEnv('JWT_REFRESH_EXPIRES_IN'),

//   // Client
//   client_url: requiredEnv('CLIENT_URL'),

//   // Email (Resend)
//   resend_api_key: requiredEnv('RESEND_API_KEY'),
//   email_from: requiredEnv('EMAIL_FROM'),
//   email_from_name: requiredEnv('EMAIL_FROM_NAME'),

//   // Cloudinary
//   cloudinary_cloud_name: requiredEnv('CLOUDINARY_CLOUD_NAME'),
//   cloudinary_api_key: requiredEnv('CLOUDINARY_API_KEY'),
//   cloudinary_api_secret: requiredEnv('CLOUDINARY_API_SECRET'),

//   // Arcjet
//   arcjet_api_key: requiredEnv('ARCJET_API_KEY'),
//   arcjet_environment: requiredEnv('ARCJET_ENVIRONMENT'),
// }
