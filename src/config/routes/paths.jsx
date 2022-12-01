// PUBLICAS
export const LOGIN = '/'

// PRIVADAS
export const PRIVATE = '/private'
export const LOGOUT = '/private/logout' 

// GESTIONAR--------------------------------------
// CATEGORÍAS
export const CATEGORIAS = '/private/gestionar/categorias'
export const CATEGORIACREAR = '/private/gestionar/categoria/crear'
export const CATEGORIA = '/private/gestionar/categoria/:id'

// PROMOTEXT
export const PROMOTEXTS = '/private/gestionar/promotexts'
export const PROMOTEXTCREAR = '/private/gestionar/promotext/crear'
export const PROMOTEXT = '/private/gestionar/promotext/:id'

// JERARQUIAS
export const JERARQUIAS = '/private/gestionar/jerarquias'
export const JERARQUIACREAR = '/private/gestionar/jerarquia/crear'
export const JERARQUIA = '/private/gestionar/jerarquia/:id'

// CUPONES
export const CUPONES = '/private/gestionar/cupones'
export const CUPON = '/private/gestionar/cupon/:id'
// -----------------------------------------------

// VERIFICAR----------------------------------------
// POR CLIENTE
export const VERIFICARCLIENTE = '/private/verificar/verificar-por-cliente'
// -----------------------------------------------

// ASIGNAR
// ASIGNACION MANUAL
export const ASIGNARMANUAL = '/private/asignar/asignar-manual'
// -----------------------------------------------

// ADMINISTRACION
export const ADMINISTRACION = '/private/administracion'
export const CREARCUPONMASIVO = '/private/administracion/crear-cupon-masivo'
export const COPIAROFFERCODE = '/private/administracion/copiar-offercode'
export const CARGADATAHANA = '/private/administracion/cargar-data-hana'
export const SUBIRIMAGENS3 = '/private/administracion/subir-imagenes-s3'
export const SACVERIFICACLIENTE = '/private/administracion/sac-verifica-cliente'