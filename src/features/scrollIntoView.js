export default function scrollIntoView(ref) {
  if (ref) {
    ref.scrollIntoView({ behavior: 'smooth' });
  }
}
