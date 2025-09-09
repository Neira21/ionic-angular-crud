Estructura HTML Page

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Mi Página</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Contenido Principal</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>
```

# AppDemoMobile

Una aplicación móvil desarrollada con **Ionic 16** y **Angular 17** que implementa un CRUD de productos con navegación y menú lateral.

## 🚀 Características

- ✅ Menú lateral de navegación con iconos
- ✅ Gestión de productos (CRUD)
- ✅ Navegación entre páginas (Home, Products)
- ✅ Componentes standalone de Angular 17
- ✅ Integración con backend API
- ✅ Tema claro configurado
- ✅ Accesibilidad mejorada

## 🛠️ Tecnologías Utilizadas

- **Ionic 16** - Framework de UI para aplicaciones móviles
- **Angular 17** - Framework de desarrollo
- **TypeScript** - Lenguaje de programación
- **Capacitor** - Para compilación nativa
- **Ionicons** - Biblioteca de iconos

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Neira21/ionic-angular-crud.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
ionic serve
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── home/                 # Página de inicio
│   ├── products/             # Página de productos
│   ├── product-item/         # Componente de item de producto
│   ├── product.service.ts    # Servicio para API de productos
│   ├── app.component.html    # Layout principal con menú
│   ├── app.component.ts      # Lógica del componente principal
│   └── app.routes.ts         # Configuración de rutas
├── theme/
│   └── variables.scss        # Variables de tema
└── global.scss               # Estilos globales
```

## 🔧 Configuraciones Importantes

### Menú de Navegación

- **Tipo**: Overlay
- **Swipe Gesture**: Habilitado (primeros 50px)
- **Cierre automático**: Al navegar
- **Accesibilidad**: Configurada con ARIA labels

### Iconos

Los iconos se registran usando `addIcons()` en `app.component.ts`:

```typescript
import { addIcons } from 'ionicons';
import { home, storefront, person } from 'ionicons/icons';

constructor() {
  addIcons({ home, storefront, person });
}
```

### Tema

- **Modo claro forzado** en `index.html` y `global.scss`
- **Variables CSS personalizadas** en `theme/variables.scss`
- **Deshabilitado modo oscuro** para consistencia visual

## 📱 Funcionalidades

### Menú Lateral

- Navegación a Home
- Navegación a Products
- Opción de Perfil (próximamente)

### Gestión de Productos

- Listado de productos
- Visualización con imágenes
- Navegación a detalles
- Integración con API backend

## 🔄 API Backend

El servicio `ProductService` se conecta a:

- **URL Base**: `http://localhost:3000/products`
- **Endpoints**: GET para listado, imágenes servidas estáticamente

## 📋 Scripts Disponibles

```bash
# Desarrollo
ionic serve

# Build para producción
ionic build

# Generar componentes
ionic generate component nombre

# Ejecutar en Android
ionic cap run android

# Ejecutar en iOS
ionic cap run ios
```

## 🐛 Solución de Problemas Comunes

### Error de ModuleResolution

Si ves warnings sobre `moduleResolution`, asegúrate de tener en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

### Iconos no se muestran

Verifica que los iconos estén registrados en `app.component.ts` con `addIcons()`.

### Warning de Accesibilidad

Los warnings de `aria-hidden` son normales en Ionic y no afectan la funcionalidad.

## 👨‍💻 Autor

**Neira21** - [GitHub](https://github.com/Neira21)
