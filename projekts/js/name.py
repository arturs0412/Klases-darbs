# Prasa lietotājam ievadīt vārdu
vards = input("Ievadiet savu vārdu: ")

# Atver failu 'name.txt' rakstīšanas režīmā ('w')
with open('name.txt', 'a',encoding='utf-8') as fails:
    # Ieraksta vārdu failā
    fails.write(vards + '\n')

print("Vārds veiksmīgi ierakstīts failā 'name.txt'.")