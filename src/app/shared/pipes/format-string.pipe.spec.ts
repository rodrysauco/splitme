import { FormatStringPipe } from './format-string.pipe';

describe('FormatStringPipe', () => {
  it('Deberia crear una instancia', () => {
    const pipe = new FormatStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('Deberia formatear el texto a mayusculas', () => {
    const resultado = 'Capital de trabajo';
    const texto = 'cApital De TraBaJo';
    const pipe = new FormatStringPipe();
    const textoTransformado = pipe.transform(texto);
    expect(textoTransformado).toEqual(resultado);
  });
});
