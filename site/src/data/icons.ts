// Asigna un icono por palabras clave del artículo o grupo.
const RULES: [RegExp, string][] = [
  [/bici|casco|cámara|bomba|alforja/i, 'bici'],
  [/niñ|infantil/i, 'ninos'],
  [/ampolla|botiqu|apósito|tirita|compeed|vaselina|crema|antinflam|dolor|músc|aguja|desinfect|venda|pies/i, 'botiquin'],
  [/camiseta|pantal|bóxer|calzoncillo|ropa|capa base|merino de manga/i, 'ropa'],
  [/zapat|bota|calcet|sandalia|chancla|plantilla|cordon|calzado/i, 'calzado'],
  [/lluvia|poncho|funda|chubasq|impermeab|humed/i, 'lluvia'],
  [/\bsol\b|gorra|gafa|protector|insect|repelente|calor|verano/i, 'sol'],
  [/invierno|térmic|frío|guante|forro|polar|braga/i, 'frio'],
  [/linterna|frontal|luz|orienta|brújula|mapa/i, 'luz'],
  [/saco|sábana|tapones|antifaz|almohada|dormir|albergue|chinche|candado|seguridad/i, 'albergue'],
  [/agua|botella|bidón|hidrata/i, 'agua'],
  [/toalla|ducha|colada|jabón|pinza|neceser|cuerda/i, 'ducha'],
  [/mochila|bolsa|riñonera|bastón|bastones/i, 'mochila'],
  [/ruta|francés|portugués|etapa/i, 'ruta'],
];
export const iconFor = (...texts: string[]) => { const t = texts.join(' '); return RULES.find(([r]) => r.test(t))?.[1] ?? 'concha'; };
